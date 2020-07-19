# Project Shelf

### First time running the app

- Run<br/> `docker run --detach --publish 5432:5432 -e POSTGRES_PASSWORD=postgres --name postgres postgres:10.12`<br/> to start PostgresQL.

- Run<br/> `yarn run migrate`<br/> to create the database.

### Start the app

- `yarn dev`
- `yarn dev:client` to only start the client.<br/> `yarn dev:backend` for only start the server.
