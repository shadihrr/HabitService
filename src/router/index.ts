import express from 'express';
import habits from './habits';
const router = express.Router();

export default (): express.Router => {
    habits(router);
    return router;
}