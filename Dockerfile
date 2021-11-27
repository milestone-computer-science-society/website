FROM node:alpine as base
RUN mkdir -p /srv/server
WORKDIR /srv/server
COPY package*.json /srv/server
RUN npm ci

FROM base as source
COPY . /srv/server

FROM source as app
ENTRYPOINT ["npm"]
CMD ["start"]