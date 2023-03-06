FROM node:18.9.0 AS Production
ENV NODE_ENV=production
WORKDIR /app/client
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . /app/client
# RUN npm run build
CMD ["npm", "start:production" ]