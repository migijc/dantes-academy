import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function BottomMenu() {
  return (
    <View style={styles.menuContainer}>
      {homeIcon}
      {userAccountIcon}
      {noteIcon}
      {settingsIcon}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 60,
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgb(220,220,220)',
    bottom: 0,
    borderRadius: 13,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const homeIcon = <Feather name="home" color="#5c5c5c" size={25} />;
const userAccountIcon = <FontAwesome name="user" size={22.5} />;
const pawIcon = <Fontisto name="paw" color="#5c5c5c" size={25} />;
const noteIcon = <FontAwesome name="sticky-note" size={25} />;
const settingsIcon = (
  <SimpleLineIcons name="options" color="#5c5c5c" size={25} />
);
