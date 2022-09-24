FROM node:latest
WORKDIR /service2
COPY package*.json /service2/
RUN npm install
COPY . /service2
EXPOSE 7002
CMD ["npm", "start"]
