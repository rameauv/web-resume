# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10 as build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./client/package.json ./client/
RUN cd ./client && yarn

COPY ./backend/package.json ./backend/
RUN cd ./backend && yarn

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
RUN cd ./client && yarn run build
RUN cd ./backend && yarn run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.6
COPY --from=build-stage /app/client/build/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf.template /etc/nginx/conf.d/default.conf.template

RUN apt-get update && apt-get install -y nodejs

COPY --from=build-stage /app/backend/dist/ /app
COPY --from=build-stage /app/backend/node_modules/ /app/node_modules

ARG MONGODB_URI_ARG
ENV mongodburi=${MONGODB_URI_ARG}
RUN echo "mongodb uri:${mongodburi}"
ARG NGINX_PORT_ARG
ENV PORT=${NGINX_PORT_ARG}
CMD sh -c envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx && node /app/index.js
