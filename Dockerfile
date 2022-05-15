FROM node:18-alpine3.14
WORKDIR /usr/app
COPY ..
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","app.js"]
