import React, {useEffect, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import TemporaryLogo from './TemporaryLogo';
import Styles from '../components/Styles';
// import TestAd from './TestAd';

export default function PreLogin(props) {
  function handleGetStartedClick() {
    props.navigation.navigate('Sign Up');
  }
  function handleLoginClick() {
    props.navigation.navigate('Sign In');
  }

  return (
    <View style={styles.mainView}>
      <TemporaryLogo />
      <View style={styles.buttonContainer}>
        <Text style={styles.slogan}>Unleash your dog and their potential</Text>
        <Pressable style={styles.signUp} onPress={handleGetStartedClick}>
          {PawIcon}
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable style={styles.loginButton} onPress={handleLoginClick}>
          {HomeIcon}
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>
      </View>
      {/* <TestAd /> */}
      {/* <Image style={styles.bgImage} source={require('../test1.jpg')} /> */}
    </View>
  );
}

let styles = Styles();

const HomeIcon = <IonIcons name="md-home" color="white" size={17} />;
const PawIcon = <Fontisto name="paw" size={15.1} color="#00766e" />;
