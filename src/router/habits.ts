import express from 'express';

import { getAllHabits, saveHabit } from '../controllers/habits';

export default (router: express.Router) => {
     router.get('/', getAllHabits);
     router.post('/', saveHabit);
}