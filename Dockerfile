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
ARG DATABASE_ID
CMD ["npm","start"]