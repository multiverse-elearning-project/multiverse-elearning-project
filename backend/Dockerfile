FROM node:18.9.0 AS Production
ENV NODE_ENV=production
WORKDIR /app/backend
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . /app/backend
# RUN npm run build
CMD [ "sh","-c","npm run start:production" ]