import { makeSchema } from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import { join } from 'path';

import * as types from './graphql';

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma()],
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  },
  contextType: {
    module: join(__dirname, './context/index.ts'),
    export: 'Context',
  },
});
