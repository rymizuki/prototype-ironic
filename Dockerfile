FROM node:12
WORKDIR /usr/local/docker/app
COPY ./ /usr/local/docker/app
RUN yarn install && yarn run bootstrap && yarn run build
CMD ["yarn", "run", "start"]
