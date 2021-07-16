
# TodoMVC App

TodoMVC demostrates using NestJs, GraphQl, Socket.io & Reactjs to build a realtime task management system
## Tech Stack

**Client:** Reactjs, Socket.io-client

**Server:** Node, Nestjs, MySQL, Sequelize, GraphQL

  
## Run Locally

This example requires docker or a local MySQL installation.  If using a local MySQL database, see `app.module.ts` for credentials, and make sure there are matching credentials in the database and the source code.

#### Clone the project

```bash
git clone https://github.com/devchuksemeka/gains-nestjs-todomvc.git todomvc
```

#### Go to the project directory

```bash
cd todomvc
```

#### Docker
Start the Mysql DB using the docker image of mysql. There is a `docker-compose.yml` file for starting Docker.

```bash
docker-compose up
```

After running the test, you can stop the Docker container with

```bash
docker-compose down
```

#### Install & Run Nestjs (Server) dependencies

```bash
cd api
npm install
npm run start:dev
```

#### Install & Run Reactjs (Client) dependencies

```bash
cd client
npm install
npm start
```

  