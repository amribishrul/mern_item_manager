FROM node:20-alpine

WORKDIR /app

COPY backend/package.json backend/package-lock.json* ./

RUN npm install

COPY backend/ .

ENV MONGO_URI=mongodb+srv://amrishafi77_db_user:Test123456@itemmanager.yreg48x.mongodb.net/item-manager?retryWrites=true&w=majority&appName=ItemManager

EXPOSE 5000
EXPOSE 8080

CMD ["node", "server.js"]