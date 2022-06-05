FROM node:16-slim

COPY . /appl

WORKDIR /appl

RUN yarn install
RUN yarn build

ENTRYPOINT ["node", ".output/server/index.mjs"]
