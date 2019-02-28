FROM node:9.10.1
COPY . /app
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli@6.0.8
RUN npm audit fix
RUN npm install cluster --ambient --save
CMD ng serve -o --host 0.0.0.0 --disableHostCheck true
