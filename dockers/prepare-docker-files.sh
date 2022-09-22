#!/usr/bin/env bash

cp -R ../dist/apps/api ../dockers/api/api
cp -R ../dist/apps/example-ui ../dockers/ui/example-ui

cp ../package.json ../dockers/api/package.json
cp ../yarn.lock ../dockers/api/yarn.lock
