FROM node:8.11.1-alpine

COPY ./package.json /api/package.json

WORKDIR /api

RUN apk add --no-cache python make g++ && \
    npm install --silent
