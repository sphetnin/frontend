FROM node:18-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -ci

COPY . .

RUN npm run build

CMD ["npx", "serve", "dist"]
