#!/usr/bin/env bash
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
TAG=${BRANCH}-${PACKAGE_VERSION}
docker build -t kanolato/node-todo:${TAG} .
docker push kanolato/node-todo:${TAG}