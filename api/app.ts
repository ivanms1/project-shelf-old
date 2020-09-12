import { use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import { server } from 'nexus';
import bodyParser from 'body-parser';
import cors from 'cors';

use(prisma());
server.express.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.express.use(
  bodyParser.json({ type: 'application/json', limit: '50mb' })
);
server.express.use(cors());
