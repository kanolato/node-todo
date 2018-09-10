FROM node:8.11.4-slim
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install --silent
EXPOSE 8080
CMD node server.js