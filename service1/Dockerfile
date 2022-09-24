FROM node:latest
WORKDIR /service1
COPY package*.json /service1/
RUN npm install
COPY . /service1
EXPOSE 7001
CMD ["npm", "start"]
