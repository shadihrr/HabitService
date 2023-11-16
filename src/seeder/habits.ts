import { Firestore } from '@google-cloud/firestore';
const db = new Firestore();

export const  seedHabits = async () => {
    const collectionName = 'habits';
    console.log('Seeding '+collectionName+ ' ...')
    db.collection(collectionName);
    await db.collection(collectionName).doc().set({
        title:''
    })

    console.log('seeding data finished...')
}
