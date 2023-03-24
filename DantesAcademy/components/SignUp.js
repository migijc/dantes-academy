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
    let result = await usersCollection
      .doc(account.user.uid)
      .set(addNewUserToDb());
    props.navigation.reset({index: 0, routes: [{name: 'Dog Register'}]});
  }

  function addNewUserToDb() {
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
      <View style={styles.header}>
        <View style={styles.iconWrapper}>{pawIcon}</View>
        <Text style={styles.headerText}>Dante's Academy</Text>
      </View>

      <View style={styles.basicInfo}>
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserName(e);
          }}
          placeholder="First name"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserLastName(e);
          }}
          placeholder="Last name"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserEmail(e);
          }}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setNewUserPassword(e);
          }}
          placeholder="Password"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          onChangeText={e => {
            setPasswordConfirm(e);
          }}
          placeholder="Confirm Password"
          secureTextEntry
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
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },

  basicInfo: {
    flexDirection: 'column',
    // backgroundColor: 'gray',
    gap: 10,
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
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150, 150, 150)',
    color: 'black',
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
    // backgroundColor: '#005397',
    // textShadowColor: '#6e2e42',
    // textShadowRadius: 10,
  },
});

let pawIcon = <Fontisto name="paw" size={25} color="#00766e" />;
