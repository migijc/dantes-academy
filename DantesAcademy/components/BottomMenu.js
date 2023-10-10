import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

export default function BottomMenu() {
  let navigation = useNavigation();

  function navigateNewSession() {
    navigation.reset({
      index: 0,
      routes: [{name: 'New Session'}],
    });
  }
  function navigateHome() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }
  function navigateProfile() {
    navigation.reset({
      index: 0,
      routes: [{name: 'Profile'}],
    });
  }
  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={navigateHome}>{homeIcon}</Pressable>
      {/* <Pressable onPress={navigateNewSession}>{stopWatchIcon}</Pressable>
      <Pressable onPress={navigateProfile}>{userAccountIcon}</Pressable> */}
      {/* {settingsIcon} */}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 60,
    // position: 'absolute',
    width: '100%',
    backgroundColor: '#2a2828',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 0.2,
    borderTopColor: 'rgba(255, 255, 255, .35)',
    // borderRadius: 5,
  },
});

const homeIcon = (
  <Feather name="home" color="#a1a1a1" size={28} />
);
// const userAccountIcon = <FontAwesome name="user" color="rgba(200,200,200, .8)" size={25} />;
// const pawIcon = <Fontisto name="paw" color="#5c5c5c" size={28} />;
// const noteIcon = <FontAwesome name="sticky-note" size={28} />;
// const stopWatchIcon = <Fontisto name="stopwatch" color="rgba(200,200,200, .8)"size={27} />;
// const settingsIcon = (
//   <SimpleLineIcons name="options" color="#5c5c5c" size={28} />
// );
