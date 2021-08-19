FROM node:alpine3.11

RUN mkdir -p /app

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]

