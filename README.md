
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

### TODO
- Throw exception trying removing an already removed task by throwing exception
- Throw exception trying to mark already completed task as completed
- Write resolver mutation for for unmarking an already completed task
- Integrate unit and integration test cases
- Integrate bootstrap to client UI


## Why Use NestJs

* It leverages and fully supports TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).
* Highly scalable and easy to maintain applications
    * NestJS forces developers to use a specific architecture by introducing Angular-like modules, services, and controllers, ensuring the application is scalable, highly testable, and loosely coupled contrary to other Node.js frameworks like Express or Koa where a mistake early on in the project regarding the architecture may cost a lot in terms of time spent refactoring the codebase later
    * Dependency injection Out of the box support
    * The architecture makes it easier for onboarding new team members to codebase 
* Microservice: A good reason to choose NestJS over ExpressJS (one of the most popular Node.js frameworks) is the fact that when a new project in Nest.js is started it is a clear architecture based on a few simple components (controllers, modules and providers). This gives great ease to split applications into microservices.
* Powerful Command Line Interface (CLI) to boost productivity and ease of development
* Detailed and well-maintained documentation
    * Created for Monoliths and Micro-services (an entire section in the documentation regarding Microservice types of NestJS applications as well as techniques and recipes
* Support for dozens of nest-specific modules that help you easily integrate with common technologies and concepts like TypeORM, Sequelize, Mongoose, GraphQL, Logging, Validation, Caching, WebSockets and much more
    * With NestJS you can build Rest API’s, MVC applications, microservices, GraphQL applications, Web Sockets or CLI’s and CRON jobs
* Out of the box integration for Data transfer object validation with the use of Class validator and validation pipes
* Fastest growing Node.js framework for the past 3 years