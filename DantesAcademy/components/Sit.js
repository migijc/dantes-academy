import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function Sit() {
  useEffect(() => {
    let commandsCollectionRef = firestore().collection('trainingCommands');
    console.log( commandsCollectionRef.get('9oaE54Si5AloFRdAvVrh'));
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
