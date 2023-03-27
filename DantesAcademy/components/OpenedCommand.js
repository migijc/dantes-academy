import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import registerCommandButtonClick from '../helperFunctions/registerCommandButtonClick';
import auth from '@react-native-firebase/auth';
import CommandNotes from './CommandNotes';

const screenWidth = Dimensions.get('window').width;

export default function OpenedCommand(props) {
  const [commandInfo, setCommandInfo] = useState(null);
  const [stepViewsList, setStepViewsList] = useState(null);

  let commandCollectionRef = firestore().collection('trainingCommands');
  async function getCommandInfo() {
    let commandDoc = commandCollectionRef.doc(
      commands[props.route.params.commandName],
    );
    let resultDoc = await commandDoc.get();
    let data = resultDoc.data();
    setCommandInfo(data);
  }

  useEffect(() => {
    getCommandInfo();
  }, []);

  useEffect(() => {
    console.log('renedered');
    if (commandInfo) {
      let docInfo = {
        commandName: commandInfo.commandName,
        commandId: commandInfo.commandId,
        customNoteAdded: false,
        dogId: 'needToAdd',
        userId: auth().currentUser.uid,
        submissionTime: `${new Date().getTime()}`,
      };
      registerCommandButtonClick(docInfo);
    }
  }, [commandInfo]);

  useEffect(() => {
    let count = 1;
    let stepsList = [];
    if (commandInfo && stepViewsList === null) {
      commandInfo.steps.forEach(step => {
        let stepView = (
          <View key={count} style={styles.stepContainer}>
            <Text style={styles.stepText}>
              {count}
              {'. '}
              {step}
            </Text>
          </View>
        );
        count++;
        stepsList.push(stepView);
      });
      setStepViewsList(stepsList);
    }
  });

  useEffect(() => {
    console.log('rendered');
  });

  if (commandInfo && stepViewsList) {
    return (
      <View style={styles.mainWrapper}>
        <ScrollView horizontal pagingEnabled style={styles.mainView}>
          <View style={styles.pageStyle}>
            <View style={styles.test}>
              <Text style={styles.commandTitle}>{commandInfo.commandName}</Text>
              <Text style={styles.description}>{commandInfo.description}</Text>
              <Text style={styles.closingTip}>* {commandInfo.closingTip}</Text>
            </View>
          </View>
          <View style={styles.pageStyle}>
            <ScrollView style={styles.test}>
              <View style={styles.stepsTitleContainer}>
                <Text style={styles.stepsTitle}>Steps</Text>
              </View>
              <View style={styles.content}>
                {stepViewsList.map(step => {
                  return step;
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.pageStyle}>
            <View style={styles.test}>
              <CommandNotes thisCommand={commandInfo.commandName} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
    // padding: 20,
  },

  header: {
    backgroundColor: '#101826',
  },

  mainView: {
    backgroundColor: '#101826',
    // paddingTop: 10,
    // width: '100%',
    // flexDirection: 'row',
    flex: 1,
    // paddingTop: 40,
    // paddingBottom: 40,
  },

  pageStyle: {
    flex: 1,
    width: screenWidth,
    paddingBottom: 60,
    paddingTop: 60,
    padding: 20,
  },

  test: {
    borderRadius: 19,
    borderWidth: 1.2,
    borderColor: '#00766e',
    flex: 1,
    backgroundColor: 'transparent',
    // padding: 12,
  },

  content: {
    // padding: 14,
    paddingTop: 29,
    paddingBottom: 29,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    // borderTopWidth: 0,
    // borderColor: '#00766e',
    backgroundColor: 'transparent',
  },

  commandTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 700,
    paddingLeft: 20,
    textDecorationLine: 'underline',
  },

  description: {
    textAlign: 'left',
    fontWeight: 700,
    fontSize: 18,
    padding: 27,
    paddingTop: 10,
    color: '#b4b4b4',
  },

  closingTip: {
    fontWeight: 400,
    fontSize: 15,
    padding: 25,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ad7934',
    // color: 'black',
    // backgroundColor: '#101826',
    // minWidth: '100%',
  },

  stepText: {
    color: '#5c5c5c',
    fontWeight: 600,
    fontSize: 17,
  },

  stepsTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 8,
    // paddingTop: 16,
    backgroundColor: 'transparent',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },

  stepsTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 400,
  },

  stepContainer: {
    minWidth: '100%',
    padding: 22,
    // marginTop: 8,
    backgroundColor: 'transparent',
    borderRadius: 16,
  },

  pageTwo: {
    flex: 1,
  },
});

const commands = {
  sit: 'LxRrU4CT0xCJAK7a9Q53',
  off: 'xtSidPtiemZlp06Sj5Wp',
  leaveIt: 'YE7RlnR088AOwW4KfIrJ',
  wait: 'cGmrYYmZ0dJkZWXdgAJ7',
  down: 'eBpdWNofNiUv3DpMnqd7',
  focus: 'tYkWCiILPJi3ktrVBdfb',
};
