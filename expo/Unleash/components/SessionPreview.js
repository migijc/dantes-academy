import React from 'react';
import {View, Pressable, Text, StyleSheet, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function SessionPreview(props) {
  const navigation = useNavigation();

  function getSessionData() {
    let currentDate = new Date();
    return {
      focusRating: props.focusRating,
      obedienceRating: props.obedienceRating,
      progressRating: props.progressRating,
      sessionDate: currentDate.toString(),
      sessionStartTime: props.sessionStartTime,
      sessionDuration: props.sessionDuration,
    };
  }

  async function handleSubmitClick() {
    let data = getSessionData();
    let userId = auth().currentUser.uid;
    let sessionsCollectionRef = firestore().collection(
      `users/${userId}/sessions`,
    );
    let result = await sessionsCollectionRef.doc().set(data);
    navigation.reset({
      index: 1,
      routes: [{name: 'Home'}],
    });
  }

  return (
    <View style={styles.mainView}>
      <Text style={{color: 'white', fontSize: 28, fontWeight: 600}}>
        Session Summary
      </Text>
      <View style={{flexDirection: 'row', marginTop: 100}}>
        <Text style={{color: 'gray', fontSize: 22}}>Session Duration: </Text>
        <Text style={{color: 'gray', fontSize: 22}}>
          {new Date(props.sessionDuration)
            .getUTCMinutes()
            .toString()
            .padStart(2, '0')}
          {':'}
          {new Date(props.sessionDuration)
            .getUTCSeconds()
            .toString()
            .padStart(2, '0')}
        </Text>
      </View>
      <View>
        <Text style={{color: 'gray', fontSize: 22}}>
          Obedience: {props.obedienceRating}
        </Text>
        <Text style={{color: 'gray', fontSize: 22}}>
          Focus: {props.focusRating}
        </Text>
        <Text style={{color: 'gray', fontSize: 22}}>
          Progress: {props.progressRating}
        </Text>
      </View>
      <Pressable onPress={handleSubmitClick} style={styles.submissionButton}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 600}}>
          Submit Session
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: screenWidth,
    backgroundColor: '#1b212e',
    padding: 20,
    alignItems: 'center',
  },

  submissionButton: {
    backgroundColor: '#00766e',
    width: '100%',
    height: 55,
    position: 'absolute',
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 900,
  },
});
