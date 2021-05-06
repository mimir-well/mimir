FROM node:15.5-alpine3.12

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
