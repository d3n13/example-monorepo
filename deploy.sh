#!/usr/bin/env bash

yarn install --frozen-lockfile --check-files;
yarn build;
cd ./dockers;
sh ./prepare-docker-files.sh;
docker compose up -d --build --force-recreate;
