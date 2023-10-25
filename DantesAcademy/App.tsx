/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import DogSignUp from './components/DogSignUp';
import OpenedCommand from './components/OpenedCommand';
import BottomMenu from './components/BottomMenu';
import ProfileScreen from './components/ProfileScreen';
import NewSessionScreen from './components/NewSessionScreen';
import MenuScreen from './components/MenuScreen';
import mobileAds from 'react-native-google-mobile-ads';
import TestAd from './components/TestAd';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const stack = createNativeStackNavigator();
  const navigatorRef = useRef(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  mobileAds().initialize();

  return (
    <NavigationContainer ref={navigatorRef}>
      <SafeAreaView style={backgroundStyle}>
        <stack.Navigator>
          <>
            <stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Dog Register"
              options={{headerShown: false}}
              component={DogSignUp}
            />
            <stack.Screen
              name="New Session"
              options={{headerShown: false}}
              component={NewSessionScreen}
            />
            <stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{headerShown: false}}
            />
            <stack.Screen
              name="Opened Command"
              options={{title: 'Command Name', headerShown: false}}
              component={OpenedCommand}
            />
            <stack.Screen
              name="Menu Screen"
              options={{headerShown: false}}
              component={MenuScreen}
            />
          </>
        </stack.Navigator>
      </SafeAreaView>
      <TestAd />
      <BottomMenu />
    </NavigationContainer>
  );
}

export default App;
