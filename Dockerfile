FROM node:lts

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

ENV DB_STORAGE /usr/src/app/db/data/database.sqlite

# Run migrations
RUN npx sequelize-cli db:migrate && \
    npx sequelize-cli db:seed:all

# Expose application port
EXPOSE 3000

CMD [ "npm", "start" ]