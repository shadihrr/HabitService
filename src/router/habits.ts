import express from 'express';

import { deleteHabit, getAllHabits, saveHabit, updateHabit, viewHabitById } from '../controllers/habits';

export default (router: express.Router) => {
     router.get('/', getAllHabits);
     router.post('/', saveHabit);
     router.get('/:id', viewHabitById);
     router.put('/:id', updateHabit);
     router.delete('/:id', deleteHabit);
}