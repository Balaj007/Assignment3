FROM node:alpine

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
