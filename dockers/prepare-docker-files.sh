#!/usr/bin/env bash

API_DIST_DIR='../dist/apps/api'
UI_DIST_DIR='../dist/apps/example-ui'
API_DOCKER_DIR='../dockers/api/api'
UI_DOCKER_DIR='../dockers/ui/example-ui'

if [ ! -d "$API_DIST_DIR" ]; then
  echo 'Api was not built. Try running `yarn build` first';
  exit 1;
fi

if [ ! -d "$UI_DIST_DIR" ]; then
  echo 'UI was not built. Try running `yarn build` first';
  exit 1;
fi

[ -d $API_DOCKER_DIR ] && rm -r $API_DOCKER_DIR
[ -d $UI_DOCKER_DIR ] && rm -r $UI_DOCKER_DIR

cp -R $API_DIST_DIR $API_DOCKER_DIR
cp -R $UI_DIST_DIR $UI_DOCKER_DIR

cp ../package.json ../dockers/api/package.json
cp ../yarn.lock ../dockers/api/yarn.lock
