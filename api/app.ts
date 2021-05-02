import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { db } from './db';
import { schema } from './schema';

const apollo = new ApolloServer({
  schema,
  context: ({ req }) => ({
    db,
    currentUserId: req?.headers?.authorization,
  }),
});

const app = express();

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ type: 'application/json', limit: '50mb' }));

apollo.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
});

app.listen(4000, () => {
  console.log(`🚀 GraphQL service ready at http://localhost:4000/graphql`);
});
