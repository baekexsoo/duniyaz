# base image
FROM node:9.6.1

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
#WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g @angular/cli@1.7.1

# add app
COPY . /usr/src/app

#ARG configuration=production
RUN npm install cluster --ambient --save

# start app
CMD ng serve --host 0.0.0.0

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
#FROM nginx:1.15
#COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

