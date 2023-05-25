FROM node:18-alpine
WORKDIR /usr/src/alto-io-challenge
COPY package.json ./
COPY package-lock.json ./
COPY . .
EXPOSE 5173
