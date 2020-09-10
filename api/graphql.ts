import { schema } from 'nexus';
import fs from 'fs';
import * as cloudinary from 'cloudinary';

const imageUploader = cloudinary.v2;

schema.inputObjectType({
  name: 'File',
  definition(t) {
    t.string('filename');
    t.string('mimetype');
    t.string('url');
  },
});

const ProjectActions = schema.enumType({
  name: 'ProjectAction',
  members: ['LIKE', 'DISLIKE'],
  description: 'Actions available to the user',
});

schema.inputObjectType({
  name: 'CreateProjectInput',
  definition(t) {
    t.string('authorId', { required: true });
    t.string('title', { required: true });
    t.string('preview', { required: true });
    t.string('repoLink', { required: true });
    t.string('siteLink', { required: true });
    t.string('description', { required: true });
  },
});

schema.inputObjectType({
  name: 'UpdateProjectInput',
  definition(t) {
    t.string('projectId', { required: true });
    t.string('title');
    t.string('preview');
    t.string('repoLink');
    t.string('siteLink');
    t.string('description');
  },
});

schema.inputObjectType({
  name: 'ReactToProjectInput',
  definition(t) {
    t.string('projectId', { required: true });
    t.string('userId', { required: true });
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
    t.model.description();
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
        input: 'CreateProjectInput',
      },
      resolve(_root, { input }, ctx) {
        const { authorId, ...rest } = input;
        return ctx.db.project.create({
          data: {
            ...rest,
            author: {
              connect: {
                id: authorId,
              },
            },
          },
        });
      },
    });
    t.field('updateProject', {
      type: 'Project',
      args: {
        input: 'UpdateProjectInput',
      },
      resolve(_root, { input }, ctx) {
        const { projectId, ...rest } = input;
        return ctx.db.project.update({
          where: { id: projectId },
          data: rest,
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
    t.field('deleteManyProjects', {
      type: 'Json',
      args: {
        projectIds: schema.stringArg({ required: true, list: true }),
      },
      async resolve(_root, { projectIds }, ctx) {
        const { count } = await ctx.db.project.deleteMany({
          where: {
            id: { in: projectIds },
          },
        });

        return {
          count,
          ids: projectIds,
        };
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
    t.field('uploadImage', {
      type: 'Json',
      args: {
        file: schema.arg({ type: 'File', required: true }),
      },
      async resolve(_root, { file }, ctx) {
        const { stream, filename, mimetype, url } = await file;
        console.log(file);
        try {
          const result = await new Promise((resolve, reject) => {
            stream().pipe(
              imageUploader.uploader.upload_stream((error, result) => {
                if (error) {
                  reject(error);
                }
                resolve(result);
              })
            );
          });

          return {
            filename,
            url: result.secure_url,
            mimetype,
          };
          return;
        } catch (err) {
          console.log(err), 'hdhdh';
        }
      },
    });
  },
});
