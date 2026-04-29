FROM node:20-alpine

WORKDIR /app

COPY backend/package.json backend/package-lock.json* ./

RUN npm install

COPY backend/ .

ENV MONGO_URI=mongodb+srv://amrishafi77_db_user:bAmmb7caPAWhtlFu@itemmanager.yreg48x.mongodb.net/item-manager?retryWrites=true&w=majority&appName=ItemManager
ENV PORT=5000

EXPOSE 5000

CMD ["node", "server.js"]