FROM node:15

WORKDIR /usr/src/

ENV PATH /usr/src/node_modules/.bin:$PATH
ENV CHOKIDAR_USEPOLLING=true 

COPY public/ /usr/src/
COPY package.json /usr/src/
COPY package-lock.json /usr/src/

RUN apt-get update -y
RUN apt-get install -y python
RUN npm install

COPY . ./

RUN npm run build

ENTRYPOINT [ "node", "server.js" ]
