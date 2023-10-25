import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import TestAd from './TestAd';
import fundamentalCommands from '../commands/fundamentalCommands';







export default function Home(props) {  
  const [commandInfoList, setCommandInfoList] = useState(null);
  const params = props.route.params;
  const Inter_900Black = params.Inter_900Black



  function navigateToCommandScreen(commandName) {
    props.navigation.navigate('Opened Command', {commandName});
  }

  function getDocs() {
    let count = 0;
    let commandsList = [];
    let keys = Object.keys(fundamentalCommands);
    keys.forEach(key => {
      commandsList.push(fundamentalCommands[key]);
    });
    // let docs = await commandsCollectionRef.get();
    let docsList = [];
    commandsList.forEach(doc => {
      // docs.docs.forEach(doc => {
      let commandPressable = (
        <Pressable
          style={styles.commandButton}
          key={count}
          onPress={() => navigateToCommandScreen(commandPressable.key)}>
          <Text style={styles.commandName}>{doc.commandName}</Text>
        </Pressable>
      );
      count++;
      docsList.push(commandPressable);
    });
    setCommandInfoList(docsList);
  }

  useEffect(() => {
    if (commandInfoList === null) {
      getDocs();
    }
  });

  if (commandInfoList) {
    let count = -1;
    return (
      <View style={styles.mainView}>
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>Commands</Text>
        </View>
        <FlatList
          numColumns={0}
          data={commandInfoList}
          renderItem={() => {
            ++count;
            return commandInfoList[count];
          }}
        />
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
}


let styles = StyleSheet.create({
  mainView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#f1f1f1',
    paddingBottom:10,
    // fontFamily:'Inter'
  },

  titleContainer: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pageTitle: {
    color: '#2a2828',
    textAlign: 'center',
    padding: 12,
    fontWeight: 800,
    fontSize: 30,
    minWidth: '100%',
  },

  commandButton: {
    backgroundColor: 'white',
    width: '90%',
    height: 55,
    marginLeft: '7.5%',
    marginRight: '7.5%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth:.5,
    borderColor:'#dbdbdb',
    borderRadius: 15,

  },

  buttonList: {
    padding: 10,
  },

  commandName: {
    color: '#2a2828',
    fontWeight: 100,
    fontSize: 16,
    // fontWeight:800
  },
});
