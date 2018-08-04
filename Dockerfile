FROM node:10.5
RUN mkdir /app
RUN chmod 777 /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
RUN npm install -g @angular/cli@1.7.1
COPY . /app
RUN npm install cluster --ambient --save
CMD ng serve -o --host 0.0.0.0

