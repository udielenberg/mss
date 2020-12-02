FROM node:15.2.0-alpine3.10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
ENV LOCATION_IQ_BASE_URL=https://eu1.locationiq.com
ENV LOCATION_IQ_ACCESS_TOKEN=pk.cb4bdbd94da3aa5256cdf801998a30bc
# EXPOSE 3001
CMD [ "node", "./dist/index.js" ]
