FROM node:16

WORKDIR /var/app/api

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./api ./api

RUN yarn install --frozen-lockfile --check-files

EXPOSE 3333

CMD ["node", "./api/main.js"]
