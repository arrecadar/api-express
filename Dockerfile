FROM node:8.11.1-alpine

ARG PRODUCTION
ENV PRODUCTION ${PRODUCTION:-true}

COPY ./package.json /api/package.json
COPY ./server.js /api/server.js
COPY ./app /api/app
COPY ./bootstrap /api/bootstrap
COPY ./config /api/config
COPY ./services /api/services

WORKDIR /api

RUN apk add --no-cache python make g++ && \
    yarn --production=${PRODUCTION}

CMD yarn start
