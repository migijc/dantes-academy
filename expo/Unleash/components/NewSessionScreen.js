import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  Dimensions,
  Pressable,
  StyleSheet,
} from 'react-native';
import NewRatingContainer from './NewRatingContainer';
import SessionPreview from './SessionPreview';

let screenWidth = Dimensions.get('window').width;

export default function NewSessionScreen(props) {
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [count, setCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(null);
  const [obedienceRating, setObedienceRating] = useState(null);
  const [focusRating, setFocusRating] = useState(null);
  const [progressRating, setProgressRating] = useState(null);
  const scrollViewRef = useRef(null);
  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState((0).toString().padStart(2, '0'));

  let navigate = props.navigation.navigate;
  let time = new Date(count * 1000);
  let minutes = time.getUTCMinutes().toString().padStart(2, '0');
  let seconds = time.getUTCSeconds().toString().padStart(2, '0');

  useEffect(() => {
    let interval;
    if (timerStarted) {
      interval = setTimeout(() => {
        setCount(count => count + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  function onStartClick() {
    let timeStamp = new Date().getTime();
    setTimerStarted(true);
    setSessionStartTime(timeStamp);
  }

  function onStopClick() {
    let stopTimeStamp = new Date().getTime();
    console.log(stopTimeStamp);
    scrollViewRef.current.scrollTo({
      x: screenWidth,
      animated: true,
    });
    setTimerStarted(false);
    setSessionDuration(stopTimeStamp - sessionStartTime);
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      style={{flex: 1, maxWidth: screenWidth}}>
      <View style={styles.mainView}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageTitle}>New Training Session</Text>
        </View>
        <View style={styles.elapsedTime}>
          <Text style={{color: 'white', fontSize: 28, fontWeight: 600}}>
            {minutes}:{seconds}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.actionButton} onPress={onStartClick}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
          <Pressable style={styles.actionButton} onPress={onStopClick}>
            <Text style={styles.buttonText}>Stop</Text>
          </Pressable>
        </View>

        {/* <Button title="Stop" onPress={onStopClick} /> */}
      </View>
      <RateObedience
        parentRef={scrollViewRef}
        screenWidth={screenWidth}
        setObedienceRating={setObedienceRating}
      />
      <RateFocus
        parentRef={scrollViewRef}
        screenWidth={screenWidth}
        setFocusRating={setFocusRating}
      />
      <RateProgress
        parentRef={scrollViewRef}
        screenWidth={screenWidth}
        setProgressRating={setProgressRating}
      />
      <SessionPreview
        obedienceRating={obedienceRating}
        focusRating={focusRating}
        progressRating={progressRating}
        sessionDuration={sessionDuration}
        screenWidth={screenWidth}
        sessionStartTime={sessionStartTime}
        navigate={navigate}
      />
    </ScrollView>
  );
}

function RateObedience(props) {
  let parentRef = props.parentRef;
  // let setObedienceRating = props.setState;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1b212e',
        width: screenWidth,
        justifyContent: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#00766e',
          paddingBottom: 40,
        }}>
        Rate your dogs obediance for this session.
      </Text>
      <NewRatingContainer
        setState={props.setObedienceRating}
        screenWidth={screenWidth * 2}
        parentRef={parentRef}
      />
    </View>
  );
}

function RateFocus(props) {
  let parentRef = props.parentRef;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1b212e',
        width: screenWidth,
        justifyContent: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#00766e',
          paddingBottom: 40,
        }}>
        Rate your dogs focus for this session.
      </Text>
      <NewRatingContainer
        screenWidth={screenWidth * 3}
        setState={props.setFocusRating}
        parentRef={parentRef}
      />
    </View>
  );
}

function RateProgress(props) {
  let parentRef = props.parentRef;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1b212e',
        width: screenWidth,
        justifyContent: 'center',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          color: '#00766e',
          paddingBottom: 40,
        }}>
        Rate your dogs Progress for this session.
      </Text>
      <NewRatingContainer
        screenWidth={screenWidth * 4}
        setState={props.setProgressRating}
        parentRef={parentRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: screenWidth,
    justifyContent: 'space-evenly',
    backgroundColor: '#1b212e',
    alignItems: 'center',
  },

  pageHeader: {
    backgroundColor: 'rgba(255,255,255, .2)',
    padding: 18,
    width: '100%',
  },

  pageTitle: {
    color: '#eee',
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
  },

  elapsedTime: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    width: '40%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 900,
    backgroundColor: 'rgba(255,255,255, .1)',
  },

  actionButton: {
    backgroundColor: '#00766e',
    width: 70,
    height: 70,
    borderRadius: 900,
    // borderColor: 'rgba(255,255,255, .1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },

  buttonText: {
    color: 'white',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
