import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function TemporaryLogo() {
  return (
    <View style={styles.mainView}>
      <View style={styles.iconWrapper}>{PawIconLogo}</View>
      <Text style={styles.title}>Dante's Academy</Text>
    </View>
  );
}

let styles = StyleSheet.create({
  mainView: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'rgba(50, 50, 50, .45)',
    padding: 20,
  },

  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 30,
    padding: 25,
    borderRadius: 900,
    borderWidth: 5,
    borderColor: '#ad7934',
    transform: [{rotate: '30deg'}],
  },

  title: {
    fontWeight: 500,
    color: '#00766e',
    fontSize: 40,
    paddingTop: 5,
    // textShadowColor: 'black',
    // textShadowRadius: 5,
  },
});

const PawIconLogo = <Fontisto name="paw" size={40} color="#ad7934" />;
