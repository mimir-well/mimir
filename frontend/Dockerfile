FROM node:15.5-alpine3.12

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --silent

COPY . .

EXPOSE 3000

ENV PATH /app/node_modules/.bin:$PATH
CMD ["npm", "start"]
