FROM node
WORKDIR /app
COPY package*.json .
COPY .env .
RUN npm i 
COPY . .
RUN ls -la
EXPOSE 3000
CMD [ "npm","run", "dev" ]