#!/usr/bin/env bash

yarn install --frozen-lockfile --check-files

yarn build

yarn dockers:prepare

cd ./dockers && docker compose up --build
