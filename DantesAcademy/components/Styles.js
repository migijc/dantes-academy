import React from 'react';
import {StyleSheet} from 'react-native';

export default function Styles() {
  let styles = StyleSheet.create({
    mainView: {
      // backgroundColor: '#0073e4',
      // backgroundColor: '#101826',
      //   height: '100%',
      //   width: '100%',
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
      // paddingTop: 80,
      // paddingBottom: 80,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

    signUp: {
      backgroundColor: 'white',
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
      color: 'gray',
      fontWeight: 300,
      fontSize: 14.5,
      paddingBottom: 5,
    },
  });

  return styles;
}
