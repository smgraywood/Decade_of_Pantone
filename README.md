# A Decade of Pantone

<img src="https://raw.githubusercontent.com/smgraywood/Pantone/master/PantoneGIF.gif" width="300px">
<br>
<br>
<br>
<h3>Overview</h3>
<hr>
<br>
A Decade of Pantone is a social media app that allows users to reflect on how Pantone's Color of the Year has influenced fashion and design both in society at large, and in their own lives and closets. Users can access social media tagged with that color by clicking on the color of their choice on the page or can upload a photo of a flat lay of an outfit featuring that color. 
<!-- put a demo here -->
<br>
<br>
<br>
<h2>Tech Stack</h2>
<hr>
<br>

*Languages*

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<br>

*Frameworks*

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
<br>
<br>
<br>
<h2>Wireframes and User Stories</h2>
<hr>
<br>
More information and details can be found on:

<a href="https://trello.com/b/UQQEMjhN/a-decade-of-pantone-app">Trello</a>
<br>
<br>
<br>
Style Guide:
<br>
<br>
<img src="https://raw.githubusercontent.com/smgraywood/Pantone/master/Style_Guide.png" width="300px">
<br>
Mockup:
<br>
<br>
<img src="https://raw.githubusercontent.com/smgraywood/Pantone/master/Mockup.png" width="500px">
<br>
Data Model:
<br>
<br>
<img src="https://raw.githubusercontent.com/smgraywood/Pantone/master/Schema.png" width="500px">
<br>
User Flow:
<br>
<br>
<img src="https://raw.githubusercontent.com/smgraywood/Pantone/master/User Flow.png" width="300px">

<td align="center"><a href="https://github.com/gsong"><img src="https://avatars.githubusercontent.com/u/607420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Song</b></sub></a><br /></a>💻📖🚇🚧</td>

<td align="center"><a href="https://github.com/mvargasvega"><img src="https://avatars.githubusercontent.com/u/29615926?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Vargas Vega</b></sub></a><br /></a>💻💬👀</td>

<td align="center"><a href="https://github.com/nbrengle"><img src="https://avatars.githubusercontent.com/u/3836628?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nate Mooney</b></sub></a><br /></a>💻📖🚇🚧</td>

<td align="center"><a href="https://github.com/ZelmaSedano"><img src="https://avatars.githubusercontent.com/u/55029831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zelma Sedano</b></sub></a><br /></a>💻💬</td>
<td align="center"><a href="https://github.com/tabbykatz"><img src="https://avatars.githubusercontent.com/u/55110763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabitha O'Melay</b></sub></a><br /></a>💻💬</td>

<!-- # Starter Project With PostgreSQL, Express, and React

End-to-end React app backed by an Express API server, persisting data to
PostgreSQL database. The project has a basic interface that fetches data from a
single table in the database, and allows you to add rows to that table.

[See the app in action][live].

[![Deploy to Heroku][deploy-badge]][deploy-workflow]
[![Reset Heroku DB][reset-badge]][reset-workflow]

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<!-- [![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- 
## Prerequisites

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website][docker-www]

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Create a New Repository From This Template

[Generate a new repository from this template](https://github.com/gsong/express-react-project-starter/generate).

[See GitHub documentation for more details](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Set Up the Development Environment

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Need to Start a `psql` Session?

```sh
npm run psql
```

## Want More Details?

- [Read about the application stack](docs/application-stack.md).
- [Read about the Express server](server/README.md).
- [Read about the React app](app/README.md).

## Deployment

[Read about setting up and deploying to Heroku](docs/deployment.md).

## Examples Implemented Using This Template

- [Adding a new feature step-by-step](https://github.com/gsong/express-react-project-starter/pull/29)
- [Store binary data in PostgreSQL](https://github.com/gsong/express-react-project-starter/pull/36)
- [Eventonica](https://github.com/gsong/express-react-project-starter/pull/25)
- [Integrate Auth0](https://github.com/gsong/express-react-project-starter/pull/44)
- [Integrate Google Calendar](https://github.com/gsong/express-react-project-starter/pull/3)

[deploy-badge]: https://github.com/gsong/express-react-project-starter/actions/workflows/deploy.yaml/badge.svg
[deploy-workflow]: https://github.com/gsong/express-react-project-starter/actions/workflows/deploy.yaml
[dh-postgres]: https://hub.docker.com/_/postgres
[docker-www]: https://docs.docker.com/get-docker/
[homebrew]: https://brew.sh
[live]: https://tt-express-react-example.herokuapp.com
[nvm]: https://github.com/nvm-sh/nvm
[reset-badge]: https://github.com/gsong/express-react-project-starter/actions/workflows/reset-db.yml/badge.svg
[reset-workflow]: https://github.com/gsong/express-react-project-starter/actions/workflows/reset-db.yml

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- <table>
  <tr>
    <td align="center"><a href="https://github.com/aedward8"><img src="https://avatars.githubusercontent.com/u/63216164?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abigail Edwards</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/issues?q=author%3Aaedward8" title="Bug reports">🐛</a> <a href="#ideas-aedward8" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-aedward8" title="Answering Questions">💬</a> <a href="#userTesting-aedward8" title="User Testing">📓</a></td>
    <td align="center"><a href="http://blog.ndpsoftware.com/"><img src="https://avatars.githubusercontent.com/u/54177?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Peterson</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/commits?author=ndp" title="Code">💻</a> <a href="#mentoring-ndp" title="Mentoring">🧑‍🏫</a></td>
    <td align="center"><a href="https://github.com/carbonsoda"><img src="https://avatars.githubusercontent.com/u/22334165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Avery</b></sub></a><br /><a href="#infra-carbonsoda" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/gsong/express-react-project-example/pulls?q=is%3Apr+reviewed-by%3Acarbonsoda" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-carbonsoda" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/sunnybrie"><img src="https://avatars.githubusercontent.com/u/76143251?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brie Klassen</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/issues?q=author%3Asunnybrie" title="Bug reports">🐛</a> <a href="https://github.com/gsong/express-react-project-example/commits?author=sunnybrie" title="Documentation">📖</a> <a href="#ideas-sunnybrie" title="Ideas, Planning, & Feedback">🤔</a> <a href="#question-sunnybrie" title="Answering Questions">💬</a> <a href="https://github.com/gsong/express-react-project-example/pulls?q=is%3Apr+reviewed-by%3Asunnybrie" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-sunnybrie" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/gsong"><img src="https://avatars.githubusercontent.com/u/607420?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Song</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/commits?author=gsong" title="Code">💻</a> <a href="https://github.com/gsong/express-react-project-example/commits?author=gsong" title="Documentation">📖</a> <a href="#infra-gsong" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-gsong" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/jenhuynh"><img src="https://avatars.githubusercontent.com/u/15962197?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jen Huynh</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/issues?q=author%3Ajenhuynh" title="Bug reports">🐛</a> <a href="#userTesting-jenhuynh" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/m3ia"><img src="https://avatars.githubusercontent.com/u/38749469?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Meia</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/commits?author=m3ia" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Shaylan7"><img src="https://avatars.githubusercontent.com/u/80442267?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shaylan7</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/issues?q=author%3AShaylan7" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.tabbykatz.com/"><img src="https://avatars.githubusercontent.com/u/55110763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tabitha O'Melay</b></sub></a><br /><a href="https://github.com/gsong/express-react-project-example/issues?q=author%3Atabbykatz" title="Bug reports">🐛</a> <a href="#question-tabbykatz" title="Answering Questions">💬</a> <a href="https://github.com/gsong/express-react-project-example/pulls?q=is%3Apr+reviewed-by%3Atabbykatz" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/xiaozhong21"><img src="https://avatars.githubusercontent.com/u/11522217?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xiao Zhong</b></sub></a><br /><a href="#question-xiaozhong21" title="Answering Questions">💬</a> <a href="#userTesting-xiaozhong21" title="User Testing">📓</a></td>
    <td align="center"><a href="https://github.com/ZelmaSedano"><img src="https://avatars.githubusercontent.com/u/55029831?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ZelmaSedano</b></sub></a><br /><a href="#tutorial-ZelmaSedano" title="Tutorials">✅</a></td>
  </tr>
</table> -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome! -->
