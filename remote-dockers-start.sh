#!/usr/bin/env bash

. bash-constants.env

ssh -t mint-vm "cd $REMOTE_DOCKER_DIR && docker compose up -d --build --force-recreate"
