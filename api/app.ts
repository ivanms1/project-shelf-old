import { use } from 'nexus';
import { prisma } from 'nexus-plugin-prisma';
import cors from 'cors';
import { server } from 'nexus';

use(prisma());

server.express.use(cors());
