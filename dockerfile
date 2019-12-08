FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./client/package*.json ./client/
RUN cd ./client && npm install
COPY ./backend/package*.json ./backend/
RUN cd ./backend && npm install
COPY package*.json ./
RUN npm install



# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source


COPY . .

ARG A_VARIABLE
ENV mongodburl="mongodb+srv://valentinr:qYjQmH.k4v6Zeu,@cluster0-zg1sr.gcp.mongodb.net/test?retryWrites=true&w=majority"
EXPOSE 3000
CMD [ "npm", "start" ]