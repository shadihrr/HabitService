import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router';
import { seedHabits } from './seeder/habits';
const app = express();
app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/', router());
console.log('environment value is....'+process.env.ENVIRONMENT)
if (process.env.ENVIRONMENT === 'DEV'){
    console.log('seeding ...')
    seedHabits();
}
const server = http.createServer(app);
server.listen("3100", () => {
 console.log("server running port is 3100")
});