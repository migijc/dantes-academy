import React from 'react';
import {StyleSheet} from 'react-native';

export default function Styles() {
  let styles = StyleSheet.create({
    mainView: {
      backgroundColor: '#1b212e',
      flex: 1,
      padding: 20,
      justifyContent: 'space-evenly',
    },

    signUp: {
      backgroundColor: '#eee',
      height: 55,
      borderColor: '#00766e',
      borderWidth: 3,
      width: '100%',
      borderRadius: 900,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 9,
    },

    loginButton: {
      backgroundColor: '#00766e',
      height: 55,
      width: '100%',
      borderRadius: 900,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 10,
    },

    buttonContainer: {
      width: '100%',
      gap: 18,
      alignItems: 'center',
      padding: 10,
    },

    buttonText: {
      fontWeight: 600,
      color: '#00766e',
      fontSize: 17,
    },

    loginButtonText: {
      fontWeight: 800,
      // color: '#101826',
      color: 'white',
      fontSize: 17,
      opacity: 1,
    },

    slogan: {
      color: '#eee',
      fontWeight: 300,
      fontSize: 12.5,
      paddingBottom: 5,
      fontWeight: 700,
      opacity: 0.45,
    },
  });

  return styles;
}
