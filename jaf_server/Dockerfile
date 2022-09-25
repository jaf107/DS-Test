FROM node:latest
WORKDIR /service1
COPY package*.json /service1/
RUN npm install
COPY . /service1
EXPOSE 1109
CMD ["npm", "start"]
