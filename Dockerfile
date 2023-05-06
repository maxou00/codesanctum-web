FROM node:18-alpine3.16 as base
# set for base and all layer that inherit from it

RUN mkdir /app

WORKDIR /app

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn

# Build the app
FROM base as build

ENV NODE_ENV production

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/package.json /app/yarn.lock ./

ADD . .

RUN yarn build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/node_modules/.bin /app/node_modules/.bin

COPY --from=build /app/.next /app/.next
COPY --from=build /app/package.json /app/package.json

ADD . .

ARG PORT=80

ENV PORT=${PORT}
EXPOSE ${PORT}

CMD yarn start