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
          include: {
            projects: true,
          },
        });

        if (user.length < 1) {
          throw new Error('User not found');
        }

        return {
          userId: user[0].id,
          toke: 'some token',
          expiresId: '1 year',
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
  },
});
