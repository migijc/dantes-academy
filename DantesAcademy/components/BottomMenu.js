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
      {noteIcon}
      {userAccountIcon}
      {/* {settingsIcon} */}
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 60,
    // position: 'absolute',
    width: '100%',
    backgroundColor: 'rgb(220,220,220)',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: 'rgb(175,175,175)',
    borderRadius: 5,
  },
});

const homeIcon = <Feather name="home" color="#5c5c5c" size={28} />;
const userAccountIcon = <FontAwesome name="user" size={25} />;
const pawIcon = <Fontisto name="paw" color="#5c5c5c" size={28} />;
const noteIcon = <FontAwesome name="sticky-note" size={28} />;
const settingsIcon = (
  <SimpleLineIcons name="options" color="#5c5c5c" size={28} />
);
