import * as habitService from '../services/habitService';

export const  seedHabits = async () => {
    const collectionName = 'habits';
    console.log('Seeding Habits ...')
    const habit: Partial<Habit> = {
        title: 'random world'
    }
  try {
    const newItem = await habitService.createHabit(habit);
  } catch (error) {
    console.log('Faied to seed habitss')
  }

    console.log('seeding habits finished...')
}
