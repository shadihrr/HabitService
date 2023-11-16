FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ARG FIRESTORE_EMULATOR_HOST
ARG GCLOUD_PROJECT
ARG ENVIRONMENT
# ENV SEED = false
# ENV GCLOUD_PROJECT="test-my-project" 
CMD ["npm","start"]