import React, {useEffect} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';

export default function PreLogin(props) {
  function handleGetStartedClick() {
    props.navigation.navigate('Sign Up');
  }

  function handleLoginClick() {
    props.navigation.navigate('Sign In');
  }

  // useEffect(() => {
  //   console.log('rendered')
  //   if (auth().currentUser) {
  //     props.navigation.reset({
  //       index: 0,
  //       routes: [{name: 'Home'}],
  //     });
  //   }
  // },[]);

  return (
    <View style={styles.mainView}>
      <View style={styles.iconWrapper}>{PawIconLogo}</View>
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
      <Image style={styles.bgImage} source={require('../test1.jpg')} />
    </View>
  );
}

let styles = StyleSheet.create({
  mainView: {
    // backgroundColor: '#0073e4',
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
    backgroundColor: '#00766e',
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
    color: 'white',
    fontSize: 38,
    paddingTop: 15,
    textShadowColor: 'black',
    textShadowRadius: 2,
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

  iconWrapper: {
    // marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    borderRadius: 900,
    borderWidth: 8,
    borderColor: '#00766e',
    transform: [{rotate: '30deg'}],
  },
});

const HomeIcon = <IonIcons name="md-home" color="white" size={15} />;
const PawIcon = <Fontisto name="paw" size={14} color="#00766e" />;
const PawIconLogo = <Fontisto name="paw" size={40} color="white" />;
