import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function OpenedCommand(props) {
  const [commandInfo, setCommandInfo] = useState(null);
  const [stepViewsList, setStepViewsList] = useState(null);

  let commandCollectionRef = firestore().collection('trainingCommands');
  async function getCommandInfo() {
    let commandDoc = commandCollectionRef.doc(
      commands[props.route.params.commandName],
    );
    let resultDoc = await commandDoc.get();
    let data = resultDoc['_data'];
    setCommandInfo(data);
  }

  useEffect(() => {
    getCommandInfo();
  }, []);

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
      <ScrollView alignItems="center" style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.commandTitle}>{commandInfo.commandName}</Text>
          <Text style={styles.description}>{commandInfo.description}</Text>
        </View>
        <View style={styles.stepsTitleContainer}>
          <Text style={styles.stepsTitle}>Steps</Text>
        </View>
        <View style={styles.content}>
          {stepViewsList.map(step => {
            return step;
          })}
        </View>
        <Text style={styles.closingTip}>* {commandInfo.closingTip}</Text>
        {/* <Button title="Great Success" /> */}
      </ScrollView>
    );
  } else return <ActivityIndicator />;
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#101826',
    // paddingBottom: 60,
  },

  header: {
    backgroundColor: '#101826',
    minWidth: '100%',
    alignSelf: 'center',
  },

  content: {
    padding: 8,
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderTopWidth: 0,
    borderColor: '#00766e',
    backgroundColor: '#00766e',
  },

  commandTitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 700,
    paddingLeft: 20,
    textDecorationLine: 'underline',
  },

  description: {
    textAlign: 'left',
    fontWeight: 400,
    fontSize: 17,
    padding: 27,
    paddingTop: 10,
    color: '#b4b4b4',
  },

  closingTip: {
    fontWeight: 600,
    fontSize: 15,
    padding: 35,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#ad7934',
    backgroundColor: '#101826',
    minWidth: '100%',
  },

  stepText: {
    color: '#5c5c5c',
    fontWeight: 700,
    fontSize: 18,
  },

  stepsTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 40,
    padding: 8,
    paddingTop: 16,
    backgroundColor: '#00766e',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  stepsTitle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 400,
  },

  stepContainer: {
    minWidth: '100%',
    padding: 28,
    marginTop: 8,
    backgroundColor: 'rgb(220,220,220)',
    borderRadius: 16,
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
