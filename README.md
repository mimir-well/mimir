# Mimir

> **Mimir** inspired by [The Odin Project](https://www.theodinproject.com/).

The goal of this app is to give place for community to create curriculums and
courses based on free and public articles, videos and other resources.

## Install (local)

### Backend

- Install Python 3.9 (or above)
  - From [website](https://www.python.org/downloads/)
  - From [pyenv](https://realpython.com/intro-to-pyenv/) (recomended)
- Create and activate virtual envoirenment in `./backend`
  ```bash
    $ cd backend
    $ python -m venv venv
    $ source venv/bin/activate
  ```
- Install dependencies
  ```bash
  (venv) $ pip install -U pip wheel setuptools
  (venv) $ pip install -r requirements.txt
  ```
- Run server
  - Suggest to start server from `app` folder, because docker start app with same command
  ```bash
  (venv) $ cd app
  (venv) $ uvicorn main:app --host 0.0.0.0 --port 8080 --reload
  ```

### Frontend

- Install Node.js
  - Recomended version - 15.5
  - From [website](https://nodejs.org/en/)
  - From [nvm](https://github.com/nvm-sh/nvm) (recomended)
- Install dependencies
  ```bash
  cd frontend
  npm install
  ```
- Run server
  ```bash
  npm start
  ```

## Run in Docker

- Install [Docker](https://docs.docker.com/get-docker/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

Docker commands are in `Makefile`

```sh
# Run docker-compose
make up
# Rebuild docker-compose
make rebuild
# Down docker-compose
make down
```

If you need to debug backend (frontend debug is not configured yet):

```sh
# Run docker-compose for debug
make debug-up
# Rebuild docker-compose for debug
make debug-rebuild
# Down docker-compose for debug
make debug-down
```
