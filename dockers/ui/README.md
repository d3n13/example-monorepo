# Running built frontend in Docker against local backend (Guide for Linux):

Prerequisites:

- Started local backend ([localhost:4243](http://localhost:4243));
- Installed docker;

Step 0: Build frontend

```console
yarn nx build dc-widget
```

Step 1: Copy `dist/apps/dc-widget` folder into the `docker` folder.
In project root folder:

```console
cp -R ./dist/apps/dc-widget ./docker
```

Step 2: Create docker image  
in `docker` folder:

```console
docker build -t ui .
```

Step 3: Run container

```console
docker run --rm --net=host ui
```

Step 4: Visit [localhost:3000](http://localhost:3000).

## Applying changes in the frontend:

To apply changes to the frontend, stop the running container (`Ctrl`+`C`) and repeat all steps.

## Cleanup:

To cleanup previous images:

```console
docker image prune
```

> **_NOTE:_** Make sure you don't commit any of the changes described above.
