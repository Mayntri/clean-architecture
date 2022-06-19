FROM node:16.15.1-alpine3.15 as base

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/bin/www" ]

USER node

