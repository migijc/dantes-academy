import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import TemporaryLogo from './TemporaryLogo';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(props) {
  const [emailToAttempt, setEmailToAttempt] = useState('');
  const [passwordToAttempt, setPasswordToAttempt] = useState('');
  const navigation = useNavigation();

  function handleNewAccountClick() {
    props.navigation.navigate('Sign Up');
  }

  async function attemptSignIn(email, password) {
    let user = await auth().signInWithEmailAndPassword(email, password);
    // if (user) {
    //  navigation.navigate('Home');
    // }
  }

  return (
    <View style={styles.mainView}>
      <TemporaryLogo />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#b6b6b6'}
          onChangeText={e => setEmailToAttempt(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'#b6b6b6'}
          secureTextEntry
          onChangeText={e => setPasswordToAttempt(e)}
        />
        <Pressable onPress={handleNewAccountClick}>
          <Text style={styles.signUpText}>Dont Have an Account?</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={() => attemptSignIn(emailToAttempt, passwordToAttempt)}
        style={styles.button}>
        <Text style={{color: '#1b212e', fontWeight: '800', fontSize: 18}}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  mainView: {
    height: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: '#1b212e',
    padding: 20,
    // backgroundColor: 'rgb(235,235,235)',
  },

  button: {
    backgroundColor: '#00766e',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 900,
  },

  InputContainer: {
    gap: 10,
    padding: 20,
    // backgroundColor: 'white',
  },

  input: {
    // backgroundColor: 'rgba(0,0, 0,.4)',
    // height: 51,
    paddingLeft: 10,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(150, 150, 150)',
  },

  signUpText: {
    textAlign: 'center',
    color: '#eee',
    opacity: 0.6,
    fontWeight: '800',
    fontSize: 15,
    paddingTop: 20,
  },

  header: {
    alignItems: 'center',
  },
});

let pawIcon = <Fontisto name="paw" size={25} color="#00766e" />;
