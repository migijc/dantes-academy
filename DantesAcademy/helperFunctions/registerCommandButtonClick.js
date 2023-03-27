import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default async function registerCommandButtonClick(docObject) {
  let currentUserId = auth().currentUser.uid;
  let commandHistoryCollectionRef = firestore().collection(
    `users/${currentUserId}/commandSubmissionHistory`,
  );
  await commandHistoryCollectionRef.doc().set(docObject);
}
