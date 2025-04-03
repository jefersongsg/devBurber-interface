# Dockerfile para o frontend em modo produção
FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build
CMD ["yarn", "start"]
EXPOSE 5173