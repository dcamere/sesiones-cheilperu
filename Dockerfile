FROM node:13

WORKDIR /app

COPY package.json .
RUN npm install
ADD src ./src
CMD ["npm", "start"]