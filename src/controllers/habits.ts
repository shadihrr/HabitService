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
    export const  viewHabitById = async (req: express.Request, res: express.Response) => {
      try {
        const id = req.params.id;
        const habit = await habitService.getHabityId(id);
        if (!habit) {
            return res.status(404).send('Habit not found');
          }
        res.status(201).json(habit);
      } catch (error) {
        res.status(500).json({ error: 'Failed to find habit, error' });
      }
        }

        export const  updateHabit = async (req: express.Request, res: express.Response) => {
            try {
                const id = req.params.id;
              const habit = await habitService.getHabityId(id);
              if (!habit) {
                return res.status(404).send('Habit not found');
              }
              const updatedHabit: Partial<Habit> = {
                title: req.body.title
            }
              const newHabit = await habitService.updateHabit(id, updatedHabit);
              res.json(newHabit);

            } catch (error) {
              res.status(500).json({ error: 'Failed to update habit' });
            }
              }
              export const  deleteHabit = async (req: express.Request, res: express.Response) => {
                try {
                    const id = req.params.id;

                  const habit = await habitService.getHabityId(id);
                  if (!habit) {
                    return res.status(404).send('Habit not found');
                  }
                  await habitService.deleteHabit(id);
                  res.sendStatus(204);
                } catch (error) {
                  res.status(500).json({ error: 'Failed to delete habit' });
                }
                  }