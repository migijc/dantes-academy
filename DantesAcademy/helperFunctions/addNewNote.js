import React from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default async function addNewNote(docData, command) {
  let userId = auth().currentUser.uid;
  const usersNotesCollectionRef = firestore().collection(
    `users/${userId}/${command}Notes`,
  );

  let result = await usersNotesCollectionRef.doc().set(docData);
  console.log(result);
  return;
}
