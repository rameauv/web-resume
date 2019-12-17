# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:10 as build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./client/package.json ./client/
RUN cd ./client && yarn

COPY ./backend/package.json ./backend/
RUN cd ./backend && yarn

# COPY package*.json ./
# RUN npm install
# RUN npm install -g serve



# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source


COPY . .

RUN cd ./client && yarn run build
RUN cd ./backend && yarn run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17.6
COPY --from=build-stage /app/client/build/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN apt-get update && apt-get install -y nodejs

COPY --from=build-stage /app/backend/dist/ /app
COPY --from=build-stage /app/backend/node_modules/ /app/node_modules

ARG mongodburiarg
ENV mongodburi=${mongodburiarg}
RUN echo "mongodb uri:${mongodburi}"

EXPOSE 80
CMD [ "sh", "-c", "nginx && node /app/index.js" ]
