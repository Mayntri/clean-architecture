FROM node:16.15.1-alpine3.15 as base

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

USER node

FROM base as production

RUN npm run build
