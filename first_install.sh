#!/bin/bash
# you need to follow these steps when cloning the repo from github

git submodule init
git submodule update
npm install
npm run build
docker-compose build
docker-compose up
