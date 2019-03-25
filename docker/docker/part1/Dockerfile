# Use an existiong docker image as a base
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./


#Tell the image what to do when it starts as as container
CMD ["npm", "start"]