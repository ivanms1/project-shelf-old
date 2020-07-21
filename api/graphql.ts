import { schema } from 'nexus';

const ProjectActions = schema.enumType({
  name: 'ProjectAction',
  members: ['LIKE', 'DISLIKE'],
  description: 'Actions available to the user',
});

const ReactToProjectInput = schema.inputObjectType({
  name: 'ReactToProjectInput',
  definition(t) {
    t.string('projectId');
    t.string('userId');
    t.field('action', {
      type: ProjectActions,
      required: true,
    });
  },
});

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
        id: schema.stringArg({ required: true }),
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
        id: schema.stringArg({ required: true }),
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
      type: 'Json',
      args: {
        email: schema.stringArg({ required: true }),
        password: schema.stringArg({ required: true }),
        name: schema.stringArg({ required: true }),
        lastName: schema.stringArg({ required: true }),
      },
      async resolve(_root, args, ctx) {
        const newUser = await ctx.db.user.create({ data: { ...args } });
        return {
          userId: newUser.id,
          token: 'some token',
          expiresIn: '1 year',
        };
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
          token: 'some token',
          expiresIn: '1 year',
        };
      },
    });
    t.field('createProject', {
      type: 'Project',
      args: {
        authorId: schema.stringArg({ required: true }),
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
    t.field('deleteProject', {
      type: 'String',
      args: {
        projectId: schema.stringArg({ required: true }),
      },
      async resolve(_root, { projectId }, ctx) {
        await ctx.db.project.delete({ where: { id: projectId } });

        return projectId;
      },
    });
    t.field('reactToProject', {
      type: 'Project',
      args: {
        input: 'ReactToProjectInput',
      },
      async resolve(_root, { input }, ctx) {
        if (!input) {
          throw new Error('Invalid action');
        }

        if (!input.projectId) {
          throw new Error('Missing project dd');
        }
        let action;
        if (input.action === 'LIKE') {
          action = 'connect';
        } else {
          action = 'disconnect';
        }

        return ctx.db.project.update({
          where: {
            id: input.projectId,
          },
          data: {
            likes: {
              [action]: {
                id: input.userId,
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
