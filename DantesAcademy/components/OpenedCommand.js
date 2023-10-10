import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import fundamentalCommands from '../commands/fundamentalCommands';

const screenWidth = Dimensions.get('window').width;

export default function OpenedCommand(props) {
  const [commandInfo, setCommandInfo] = useState(null);
  const [stepViewsList, setStepViewsList] = useState(null);
  const [currentPage, setCurrentIndex] = useState(0);

  //this function is used to calculate the current page of the scroll view by comparing offset of content to screen width
  const handleMomentumScrollEnd = event => {
    // Calculate the current page based on the scroll position
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / screenWidth);
    setCurrentIndex(page);
  };

  useEffect(() => {
    function getCommandInfo() {
      let commandDoc = fundamentalCommands[props.route.params.commandName];
      setCommandInfo(commandDoc);
    }
    getCommandInfo();
  }, [props.route.params.commandName]);

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

  if (commandInfo && stepViewsList) {
    return (
      <View style={styles.mainWrapper}>
        <ScrollView
          horizontal
          pagingEnabled
          style={styles.mainView}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}>
          <View style={styles.pageStyle}>
            <View style={styles.test} justifyContent="space-evenly">
              <Text style={styles.commandTitle}>{commandInfo.commandName}</Text>
              <Text style={styles.description}>{commandInfo.description}</Text>
              <View style={styles.closingTipWrapper}>
                <Text style={styles.closingTip}>
                  * {commandInfo.closingTip}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.pageStyle}>
            <ScrollView style={styles.test}>
              <View style={styles.stepsTitleContainer}>
                <Text style={styles.commandTitle}>
                  {commandInfo.commandName}
                </Text>
                <Text style={styles.stepsTitle}>Steps</Text>
              </View>
              <View style={styles.content}>
                {stepViewsList.map(step => {
                  return step;
                })}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <PageIndicator pages={2} currentPage={currentPage} />
      </View>
    );
  } else {
    return <ActivityIndicator />;
  }
}

const PageIndicator = ({pages, currentPage}) => {
  const [indicatorsList, setIndicatorsList] = useState(null);

  let styles = {};
  styles.selected = {
    width: 10,
    height: 10,
    borderColor: '#2a2828',
    borderWidth: 1,
    borderRadius: 900,
    backgroundColor: '#2a2828',
  };
  styles.notSelected = {
    width: 10,
    height: 10,
    borderColor: '#2a2828',
    borderWidth: 1,
    borderRadius: 900,
    backgroundColor: 'transparent',
  };

  function getIndicators() {
    let list = [];
    for (let i = 0; i < pages; i++) {
      let indicator = (
        <View
          style={i === currentPage ? styles.selected : styles.notSelected}
          key={i}
        />
      );
      list.push(indicator);
    }
    setIndicatorsList(list);
  }

  useEffect(() => {
    getIndicators();
  }, [pages, currentPage]);

  if (indicatorsList) {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 30,
        }}>
        {indicatorsList.map(indicator => {
          return indicator;
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
    backgroundColor: '#f1f1f1',
  },

  mainView: {
    flex: 1,
  },

  pageStyle: {
    flex: 1,
    width: screenWidth,
  },

  test: {
    borderRadius: 19,
    borderColor: 'transparent',
    flex: 1,
    height: '100%',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },

  commandTitle: {
    color: '#2a2828',
    fontSize: 50,
    fontWeight: 700,
    paddingLeft: 15,
    textDecorationLine: 'none',
    width: '100%',
  },

  description: {
    textAlign: 'left',
    fontWeight: 700,
    padding: 15,
    color: '#2a2828',
    fontSize: 17,
  },

  closingTip: {
    fontWeight: 500,
    fontSize: 13,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#2a2828',
  },

  stepText: {
    color: '#2a2828',
    fontWeight: 400,
    fontSize: 13,
  },

  stepsTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  stepsTitle: {
    fontSize: 28,
    color: '#2a2828',
    fontWeight: 400,
  },

  stepContainer: {
    minWidth: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 5,
    minHeight: 60,
  },

  pageTwo: {
    flex: 1,
  },

  closingTipWrapper: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
});
