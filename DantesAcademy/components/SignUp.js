import React, {useEffect, useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import DogSignUp from './DogSignUp';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SignOutButton from './SignOutButton';
import TemporaryLogo from './TemporaryLogo';

export default function SignUp(props) {
  const [newUserName, setNewUserName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [newUserTagName, setNewUserTagName] = useState('');
  let usersCollection = firestore().collection('users');

  async function createAccount() {
    let account = await auth().createUserWithEmailAndPassword(
      newUserEmail,
      newUserPassword,
    );
    await usersCollection.doc(account.user.uid).set(getDocData());
    let ghostNotesDocRef = firestore()
      .collection(`users/${account.user.uid}/customNotes`)
      .doc('ghost');
    ghostNotesDocRef.set({hey: 1});

    let adDocRef = firestore()
      .collection(`users/${account.user.uid}/adInfo`)
      .doc('data');
    adDocRef.set({lastAdDisplayTime: null, displayAd: false});
    props.navigation.reset({index: 0, routes: [{name: 'Dog Register'}]});
  }

  function getDocData() {
    let newUserId = auth().currentUser.uid;

    return {
      firstName: newUserName,
      lastName: newUserLastName,
      email: newUserEmail,
      userId: newUserId,
    };
  }

  return (
    <View style={styles.mainView}>
      {/* <View style={styles.header}>
        <View style={styles.iconWrapper}>{pawIcon}</View>
        <Text style={styles.headerText}>Dante's Academy</Text>
      </View> */}
      <TemporaryLogo />
      <View style={styles.basicInfo}>
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserName(e);
          }}
          placeholder="First name"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserLastName(e);
          }}
          placeholder="Last name"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserEmail(e);
          }}
          placeholder="Email"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserPassword(e);
          }}
          placeholder="Password"
          placeholderTextColor={'#b6b6b6'}
          secureTextEntry
          cursorColor={'#00766e'}
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setPasswordConfirm(e);
          }}
          placeholder="Confirm Password"
          placeholderTextColor={'#b6b6b6'}
          secureTextEntry
          cursorColor={'#00766e'}
        />
      </View>
      {/* <SignOutButton /> */}
      <Pressable style={styles.createAccountButton}>
        <Text style={styles.buttonText} onPress={createAccount}>
          Create Account
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    // height: '100%',
    // width: '100%',
    flex: 1,
    backgroundColor: '#101826',
    justifyContent: 'space-between',
    // alignItems: 'center',
    padding: 20,
    paddingTop: 80,
    paddingBottom: 80,
  },

  basicInfo: {
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255, .2)',
    gap: 10,
    padding: 15,
    borderRadius: 7,
  },

  pageTitle: {
    fontSize: 28,
    textAlign: 'center',
  },

  createAccountButton: {
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

  input: {
    // backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150, 150, 150)',
    color: 'white',
    paddingLeft: 5,
  },

  header: {
    alignItems: 'center',
  },

  iconWrapper: {
    transform: [{rotate: '30deg'}],
  },

  headerText: {
    fontSize: 40,
    padding: 15,
    fontWeight: '900',
    color: '#00766e',
  },
});

let pawIcon = <Fontisto name="paw" size={25} color="#00766e" />;
