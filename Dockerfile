FROM node:15.3.0
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
CMD ["yarn", "start"]