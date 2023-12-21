import { Firestore } from '@google-cloud/firestore';


const firestore = new Firestore({databaseId: process.env.DATABASE_ID});
export const createHabit = async (habit: Partial<Habit>) => {
  const documentRef = await firestore.collection('habits').add(habit);
  habit.id = documentRef.id
  return habit;
};

export const getAllHabits = async () => {
  const snapshot = await firestore.collection('habits').get();
  const habits: any[] = [];
  snapshot.forEach((doc) => {
    habits.push({ id: doc.id, ...doc.data() });
  });
  return habits;
};

export const getHabityId = async (id: string) => {
  const document = await firestore.collection('habits').doc(id).get();
  if (!document.exists) {
    return null;
  }
  return { id: document.id, ...document.data() };
};

export const updateHabit = async (id: string, habit: Partial<Habit>) => {
  await firestore.collection('habits').doc(id).update(habit);
  return habit;
};

export const deleteHabit = async (id: string) => {
  await firestore.collection('habits').doc(id).delete();
};
