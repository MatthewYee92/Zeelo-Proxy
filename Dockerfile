FROM node

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 7000

CMD ["npm", "start"]