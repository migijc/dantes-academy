import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import SignOutButton from './SignOutButton';
import firestore from '@react-native-firebase/firestore';
import BottomMenu from './BottomMenu';

export default function Home(props) {
  const [commandClicked, setCommandClicked] = useState(null);
  const [commandInfoList, setCommandInfoList] = useState(null);
  const commandsCollectionRef = firestore().collection('trainingCommands');

  function navigateToCommandScreen(commandName) {
    props.navigation.navigate('Opened Command', {commandName});
  }

  async function getDocs() {
    let count = 1;
    let docs = await commandsCollectionRef.get();
    let docsList = [];
    docs.docs.forEach(doc => {
      let data = doc.data();
      let commandPressable = (
        <Pressable
          style={styles.commandButton}
          key={count}
          onPress={() => navigateToCommandScreen(`${data.commandShortcut}`)}>
          <Text style={styles.commandName}>{data.commandName}</Text>
        </Pressable>
      );
      count++;
      docsList.push(commandPressable);
    });
    setCommandInfoList(docsList);
  }

  useEffect(() => {
    getDocs();
  }, []);

  if (commandInfoList) {
    let count = -1;
    return (
      <View style={styles.mainView}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Commands</Text>
        </View>
        <FlatList
          // justifyContent="center"
          alignItems="center"
          style={styles.buttonList}
          numColumns={2}
          data={commandInfoList}
          renderItem={() => {
            ++count;
            return commandInfoList[count];
          }}
        />
        <BottomMenu />
        {/* <SignOutButton /> */}
      </View>
    );
  } else return <ActivityIndicator />;
}

let styles = StyleSheet.create({
  mainView: {
    height: '100%',
    // padding: 15,
    // paddingBottom: 0,
    width: '100%',
    // backgroundColor: '#101826',
    backgroundColor: 'white',
  },

  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },

  pageTitle: {
    color: 'white',
    textAlign: 'center',
    padding: 15,
    fontWeight: 500,
    fontSize: 30,
    borderBottomWidth: 8,
    borderBottomColor: 'rgb(220,220,220)',
    backgroundColor: '#ad7934',
    minWidth: '100%',
  },

  commandButton: {
    backgroundColor: '#00766e',
    borderColor: '#357c76',
    borderWidth: 9,
    color: 'white',
    width: '40%',
    height: 95,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonList: {
    padding: 10,
  },

  commandName: {
    // color: '#b4b4b4',
    color: 'white',
    fontWeight: 400,
    fontSize: 16,
  },

  bannerImage: {
    height: '30%',
    width: '100%',
    borderRadius: 10,
  },
});
