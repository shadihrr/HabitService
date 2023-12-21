import express from 'express';
import * as habitService from '../services/habitService';

export const  getAllHabits = async (req: express.Request, res: express.Response) => {
    try {
        const habits = await habitService.getAllHabits();
        res.status(200).json(habits);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch habits' });
      }
}
export const  saveHabit = async (req: express.Request, res: express.Response) => {
    const habit: Partial<Habit> = {
        title: req.body.title
    }
  try {
    const newItem = await habitService.createHabit(habit);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
    }