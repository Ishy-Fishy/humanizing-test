# Filename: Dockerfile
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 50051
ENV DB_URL 'mongodb://host.docker.internal:27017'
CMD [ "npm", "start"]