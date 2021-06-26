FROM node:14.7-alpine

USER node

WORKDIR /home/node

COPY package.json package-lock.json ./
# RUN npm config set unsafe-perm true
RUN npm install --silent

COPY . .

EXPOSE 3000

# ENV PATH /app/node_modules/.bin:$PATH
CMD ["npm", "start"]
