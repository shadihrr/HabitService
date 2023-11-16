FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ARG PORT
ARG FIRESTORE_EMULATOR_HOST
ARG GCLOUD_PROJECT
ARG ENVIRONMENT
CMD ["npm","start"]