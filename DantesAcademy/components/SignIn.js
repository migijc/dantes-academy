import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function SignIn(props) {
  function handleNewAccountClick() {
    props.navigation.navigate('Sign Up');
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        {pawIcon}
        <Text style={styles.headerText}>Dante's Academy</Text>
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry
        />
        <Pressable onPress={handleNewAccountClick}>
          <Text style={styles.signUpText}>Dont Have an Account?</Text>
        </Pressable>
      </View>

      <Pressable style={styles.signInButton}>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 19}}>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
}

let styles = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },

  headerText: {
    fontSize: 40,
    padding: 15,
    fontWeight: '900',
    color: '#0073e4',
    // backgroundColor: '#005397',
    // textShadowColor: '#6e2e42',
    // textShadowRadius: 10,
  },

  InputContainer: {
    gap: 10,
    padding: 20,
    // backgroundColor: 'white',
  },

  input: {
    // backgroundColor: 'rgba(0,0, 0,.4)',
    height: 51,
    paddingLeft: 10,
    color: 'black',
    borderBottomColor: 'rgb(150, 150, 150)',
    borderBottomWidth: 1,
  },

  signInButton: {
    backgroundColor: '#0073e4',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signUpText: {
    textAlign: 'center',
    color: '#0073e4',
    fontWeight: '800',
    fontSize: 18,
  },

  header: {
    alignItems: 'center',
  },
});

let pawIcon = <Fontisto name="paw" size={25} color="#0073e4" />;
