FROM node:latest

WORKDIR /app

RUN npx create-next-app@13

COPY package*.json ./

RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]