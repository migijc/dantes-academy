import React from 'react';
import {Button, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function PreLogin(props) {
  function handleGetStartedClick() {
    props.navigation.navigate('Sign Up');
  }

  function handleLoginClick() {
    props.navigation.navigate('Sign In');
  }

  return (
    <View style={styles.mainView}>
      {PawIconLogo}
      <Text style={styles.title}>Dante's Academy</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleGetStartedClick}>
          {PawIcon}
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        <Pressable style={styles.loginButton} onPress={handleLoginClick}>
          {HomeIcon}
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
      <Image style={styles.bgImage} source={require('../dante.jpg')} />
    </View>
  );
}

let styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#0073e4',
    // backgroundColor: 'red',
    height: '100%',
    width: '100%',
    // padding: 20,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },

  button: {
    backgroundColor: 'white',
    height: 50,
    width: '75%',
    borderRadius: 900,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  loginButton: {
    backgroundColor: '#0073e4',
    height: 50,
    width: '75%',
    borderRadius: 900,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  buttonContainer: {
    width: '100%',
    gap: 25,
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
  },

  title: {
    fontWeight: 800,
    color: '#0073e4',
    fontSize: 38,
  },

  buttonText: {
    fontWeight: 600,
  },

  loginButtonText: {
    fontWeight: 600,
    color: 'white',
  },

  bgImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
});

const HomeIcon = <IonIcons name="md-home" color="white" size={15} />;
const PawIcon = <Fontisto name="paw" size={14} color="#0073e4" />;
const PawIconLogo = <Fontisto name="paw" size={22} color="#0073e4" />;
