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
    let adDocRef = firestore()
      .collection(`users/${account.user.uid}/adInfo`)
      .doc('data');
    adDocRef.set({lastAdDisplayTime: null, displayAd: false});
    // props.navigation.reset({index: 0, routes: [{name: 'Dog Register'}]});
    await usersCollection.doc(account.user.uid).set(getDocData());
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
      {/* <View >
        <View >{pawIcon}</View>
        <Text >Dante's Academy</Text>
      </View> */}
      <TemporaryLogo />
      <View>
        <TextInput
          onChangeText={e => {
            setNewUserName(e);
          }}
          placeholder="First name"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
          style={styles.input}
        />
        <TextInput
          onChangeText={e => {
            setNewUserLastName(e);
          }}
          placeholder="Last name"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
          style={styles.input}
        />
        <TextInput
          onChangeText={e => {
            setNewUserEmail(e);
          }}
          placeholder="Email"
          placeholderTextColor={'#b6b6b6'}
          cursorColor={'#00766e'}
          style={styles.input}
        />
        <TextInput
          onChangeText={e => {
            setNewUserPassword(e);
          }}
          placeholder="Password"
          placeholderTextColor={'#b6b6b6'}
          secureTextEntry
          cursorColor={'#00766e'}
          style={styles.input}
        />
        <TextInput
          onChangeText={e => {
            setPasswordConfirm(e);
          }}
          placeholder="Confirm Password"
          placeholderTextColor={'#b6b6b6'}
          secureTextEntry
          cursorColor={'#00766e'}
          style={styles.input}
        />
      </View>
      {/* <SignOutButton /> */}
      <Pressable style={styles.button}>
        <Text style={styles.buttonText} onPress={createAccount}>
          Create Account
        </Text>
      </Pressable>
    </View>
  );
}

let pawIcon = <Fontisto name="paw" size={25} color="#00766e" />;

let styles = StyleSheet.create({
  input: {
    // backgroundColor: 'white',
    borderBottomWidth: 0.2,
    borderBottomColor: '#eee',
    color: '#eee',
  },

  mainView: {
    padding: 20,
    height: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#1b212e',
  },

  button: {
    backgroundColor: '#00766e',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 900,
  },

  buttonText: {
    color: '#1b212e',
    fontWeight: '800',
    fontSize: 18,
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
