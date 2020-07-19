import { schema } from 'nexus';

schema.objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.lastName();
    t.model.email();
    t.model.github();
    t.model.discord();
    t.model.role();
    t.model.projects();
    t.model.projectsLiked();
  },
});

schema.objectType({
  name: 'Project',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.author();
    t.model.preview();
    t.model.repoLink();
    t.model.siteLink();
    t.model.likes();
    t.model.isApproved();
  },
});

schema.queryType({
  definition(t) {
    t.field('getUser', {
      type: 'User',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        return ctx.db.user.findOne({
          where: { id: args.id },
        });
      },
    });
    t.field('getProject', {
      type: 'Project',
      args: {
        id: schema.intArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        return ctx.db.project.findOne({
          where: { id: args.id },
        });
      },
    });
    t.field('getProjects', {
      type: 'Project',
      list: true,
      resolve(_root, _, ctx) {
        return ctx.db.project.findMany();
      },
    });
  },
});

schema.mutationType({
  definition(t) {
    t.field('signUp', {
      type: 'User',
      args: {
        email: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true }),
        name: schema.stringArg({ required: true }),
        lastName: schema.stringArg({ required: true }),
      },
      resolve(_root, args, ctx) {
        return ctx.db.user.create({ data: { ...args } });
      },
    });
    t.field('login', {
      type: 'Json',
      args: {
        email: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true }),
      },
      async resolve(_root, args, ctx) {
        const user = await ctx.db.user.findMany({
          where: {
            email: args.email,
          },
        });

        if (user.length < 1) {
          throw new Error('User not found');
        }

        return {
          userId: user[0].id,
          toke: 'some token',
          expiresIn: '1 year',
        };
      },
    });
    t.field('createProject', {
      type: 'Project',
      args: {
        authorId: schema.intArg({ required: true }),
        title: schema.stringArg({ required: true }),
        preview: schema.stringArg({ required: true }),
        repoLink: schema.stringArg({ required: true }),
        siteLink: schema.stringArg({ required: true }),
        description: schema.stringArg({ required: true }),
      },
      resolve(_root, { authorId, ...args }, ctx) {
        return ctx.db.project.create({
          data: {
            ...args,
            author: {
              connect: {
                id: authorId,
              },
            },
          },
        });
      },
    });
    t.field('reactToProject', {
      type: 'Project',
      args: {
        projectId: schema.intArg({ required: true }),
        userId: schema.intArg({ required: true }),
        action: schema.stringArg({ required: true }),
        currentLikes: schema.intArg({ required: true, list: true }),
      },
      async resolve(_root, args, ctx) {
        if (args.action !== 'LIKE' && args.action !== 'DISLIKE') {
          throw new Error('Invalid action');
        }
        let action;
        if (args.action === 'LIKE') {
          action = 'connect';
        } else {
          action = 'disconnect';
        }

        return ctx.db.project.update({
          where: {
            id: args.projectId,
          },
          data: {
            likes: {
              [action]: {
                id: args.userId,
              },
            },
          },
          include: {
            likes: true,
            author: true,
          },
        });
      },
    });
  },
});
