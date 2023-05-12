FROM node:14-alpine

WORKDIR /app

RUN apk update && apk add git

RUN git clone --single-branch --branch master https://github.com/David21092/Versicherungsrechner-React.git

WORKDIR /app/Versicherungsrechner-React

RUN npm install

RUN npm install react-router-dom

RUN npm install @emailjs/browser

RUN npm install react-faq-component

EXPOSE 3000

CMD ["npm", "start"]
