import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Home';
// import DogSignUp from './components/DogSignUp';
import OpenedCommand from './components/OpenedCommand';
import BottomMenu from './components/BottomMenu';
// import ProfileScreen from './components/ProfileScreen';
// import NewSessionScreen from './components/NewSessionScreen';
import MenuScreen from './components/MenuScreen';
// import TestAd from './components/TestAd';
import { createStackNavigator } from '@react-navigation/stack';
import {useFonts, Inter_900Black} from '@expo-google-fonts/inter'
// import mobileAds from 'react-native-google-mobile-ads';
// import TestAd from './components/TestAd';
// import TestAd from './components/TestAd';

// unit id ca-app-pub-4877096179531895/4229887065

const stack = createStackNavigator()


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  
  if (!fontsLoaded) {
    return null;
  }

    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <stack.Navigator>
            <>
              <stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                initialParams={{Inter_900Black: fontsLoaded[Inter_900Black]}}
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
        <BottomMenu />
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
