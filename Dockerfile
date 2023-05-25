FROM node:18-alpine
WORKDIR /usr/src/micro-cms
COPY package.json ./
COPY package-lock.json ./
COPY . .
EXPOSE 5173
ENV WAIT_VERSION 2.12.0
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait
