import React from 'react';
import {View} from 'react-native';
import SignOutButton from './SignOutButton';

export default function MenuScreen() {
  return (
    <View style={{width: '100%', flex: 1, backgroundColor: '#1b212e',}}>
      <SignOutButton />
    </View>
  );
}
