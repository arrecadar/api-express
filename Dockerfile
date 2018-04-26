FROM node:8.11.1-alpine

ARG NODE_ENV

COPY . /api

WORKDIR /api

RUN apk add --no-cache python make g++ && \
    npm rebuild && npm install

CMD npm start
