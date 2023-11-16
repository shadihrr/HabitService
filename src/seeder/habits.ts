import { Firestore } from '@google-cloud/firestore';
const db = new Firestore();

export const  seedHabits = async () => {
    const collectionName = 'habits';
    console.log('Seeding '+collectionName+ ' ...')
    db.collection(collectionName);
    const batch = db.batch();
    const collectionRef = db.collection(collectionName);
    const docRef =  collectionRef.doc();
    await db.collection(collectionName).doc().set({
        title:'sdfsdf'
    })
    // batch.set(docRef,{
    //     data: 'cleaning room'
    // })

    console.log('seeding data finished...')
    const query = db.collection('habits')//.where('user', '==', user);
const querySnapshot = await query.get();
console.log(querySnapshot.docs);
}
