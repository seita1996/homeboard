FROM node:18.16.0-alpine3.18

WORKDIR /app

RUN apk update && \
    apk add git

USER node

EXPOSE 3000
