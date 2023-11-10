FROM node:lts-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
