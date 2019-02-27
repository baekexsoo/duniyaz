FROM node:10.5
COPY . /app
WORKDIR /app
COPY package*.json /app/
RUN npm install -g @angular/cli
RUN npm install
RUN npm audit fix
RUN npm install typescript@>=3.1.1 
RUN npm install cluster --ambient --save
CMD ng serve -o --host 0.0.0.0 --disableHostCheck true
