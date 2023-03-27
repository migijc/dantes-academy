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
      {/* <View style={styles.header}>
        {pawIcon}
        <Text style={styles.headerText}>Dante's Academy</Text>
      </View> */}
      <TemporaryLogo />
      <Text>Register Doggo</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => setDogName(e)}
        placeholder="Dog's Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={e => setDogBreed(e)}
        placeholder="Breed"
      />
      <TextInput
        style={styles.input}
        onChangeText={e => setDogDOB(e)}
        placeholder="DOB"
      />

      <Pressable style={styles.button} onPress={enterDogData}>
        <Text style={styles.buttonText}>Enroll Dog</Text>
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150, 150, 150)',
    color: 'black',
  },

  mainView: {
    gap: 10,
    // padding: 10,
    height: '100%',
    backgroundColor: '#101826',
  },

  button: {
    backgroundColor: '#00766e',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 900,
  },

  buttonText: {
    color: 'white',
    fontWeight: '800',
  },

  header: {
    alignItems: 'center',
  },

  headerText: {
    fontSize: 40,
    padding: 15,
    fontWeight: '900',
    color: '#00766e',
  },
});

let pawIcon = <Fontisto name="paw" size={25} color="#00766e" />;
