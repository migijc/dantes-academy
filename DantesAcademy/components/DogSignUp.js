import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import TemporaryLogo from './TemporaryLogo';

export default function DogSignUp(props) {
  const navigation = useNavigation();
  const [dogName, setDogName] = useState('');
  const [dogDOB, setDogDOB] = useState('');
  const [dogBreed, setDogBreed] = useState('');

  async function enterDogData() {
    let userID = auth().currentUser.uid;
    let userCollectionRef = firestore().collection('users');
    let dogCollectionRef = firestore().collection(
      `users/${userID}/dogInformation`,
    );
    let dogInfo = getDocInfo();
    let result = await dogCollectionRef.add(dogInfo);
    await dogCollectionRef.doc(`${result.id}`).update({dogId: result.id});
    await userCollectionRef.doc(`${userID}`).update({dogId: result.id});
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  function getDocInfo() {
    const info = {
      dogName: dogName,
      dogBreed: dogBreed,
      dogDOB: dogDOB,
    };

    return info;
  }

  return (
    <View style={styles.mainView}>
      <TemporaryLogo />
      <Text style={styles.dogRegisterTitle}>Register your pup</Text>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={e => setDogName(e)}
          placeholder="Dog's Name"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setDogBreed(e)}
          placeholder="Breed"
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setDogDOB(e)}
          placeholder="DOB"
          placeholderTextColor={'gray'}
        />
      </View>

      <Pressable style={styles.enrollButton} onPress={enterDogData}>
        <Text style={styles.buttonText}>Enroll Dog</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#1b212e',
    padding: 20,
    flex: 1,
    justifyContent: 'space-evenly',
  },

  input: {
    paddingLeft: 10,
    color: '#eee',
    borderBottomWidth: 0.2,
    borderBottomColor: 'rgb(150, 150, 150)',
  },

  dogRegisterTitle: {
    color: '#eee',
    fontWeight: 600,
    fontSize: 28,
    textAlign: 'center',
  },

  enrollButton: {
    backgroundColor: '#00766e',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 900,
  },

  buttonText: {
    textAlign: 'center',
    color: '#1b212e',
    fontWeight: '800',
    fontSize: 18,
    // paddingTop: 20,
  },
});
