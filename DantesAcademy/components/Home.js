import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Home() {
  return (
    <View style={{height: '100%', justifyContent: 'space-between', padding: 15, alignItems:'center', width: '100%'}}>
      <View style={{flexDirection: 'row', gap: 10, height: '15%'}}>
        <View style={styles.testView}>
          <Text>Sit</Text>
        </View>
        <View style={styles.testView}>
          <Text>Stand</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, height: '15%'}}>
        <View style={styles.testView}>
          <Text>Sit</Text>
        </View>
        <View style={styles.testView}>
          <Text>Stand</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, height: '15%'}}>
        <View style={styles.testView}>
          <Text>Sit</Text>
        </View>
        <View style={styles.testView}>
          <Text>Stand</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, height: '15%'}}>
        <View style={styles.testView}>
          <Text>Sit</Text>
        </View>
        <View style={styles.testView}>
          <Text>Stand</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 10, height: '15%'}}>
        <View style={styles.testView}>
          <Text>Sit</Text>
        </View>
        <View style={styles.testView}>
          <Text>Stand</Text>
        </View>
      </View>

    </View>
  );
}

let styles = StyleSheet.create({
  testView: {
    width: '50%',
    backgroundColor: 'gray',
    gap: 10,
    height: '100%'
  },
});
