import express from 'express';
import { Firestore } from '@google-cloud/firestore';
const db = new Firestore();

export const  getAllHabits = async (req: express.Request, res: express.Response) => {
const user = db.collection('users').doc('WF7wmyZvh7nvS2QJFGZP');
const query = db.collection('habits')//.where('user', '==', user);
const querySnapshot = await query.get();
if (querySnapshot.size > 0) {
    res.json(querySnapshot.docs);
}
else {
    res.json({status: 'Not found'});
}
}
export const  saveHabit = async (req: express.Request, res: express.Response) => {
    const data = {
        title: req.body.title,
    }
    await db.collection('habits').doc().set(data);
    res.json({ status: 'success', data: { habit: data } });
    // const user = db.collection('users').doc('WF7wmyZvh7nvS2QJFGZP');
    // const query = db.collection('habits').where('user', '==', user);
    // const querySnapshot = await query.get();
    // if (querySnapshot.size > 0) {
    //     res.json(querySnapshot.docs[0].data());
    // }
    // else {
    //     res.json({status: 'Not found'});
    // }
    }