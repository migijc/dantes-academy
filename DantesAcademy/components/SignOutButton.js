import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function SignOutButton(props) {
  let navigation = useNavigation();

  function signOut() {
    auth().signOut();
    // navigation.replace('Pre Login');
  }

  return (
    <Pressable style={styles.button} onPress={signOut}>
      <Text style={styles.text}>Sign Out</Text>
    </Pressable>
  );
}

let styles = StyleSheet.create({
  button: {
    backgroundColor: '#0073e4',
  },

  text: {
    color: 'white',
  },
});
