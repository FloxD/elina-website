FROM node:16-slim as build

COPY . /appl

WORKDIR /appl

RUN yarn install
RUN yarn build

FROM node:16-slim as run

WORKDIR /appl
COPY --from=build /appl/.output/ /appl/.output/

ENTRYPOINT ["node", ".output/server/index.mjs"]
