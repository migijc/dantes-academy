/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import Home from './components/Home';
// import auth from '@react-native-firebase/auth';
import SignUp from './components/SignUp';
import DogSignUp from './components/DogSignUp';
import PreLogin from './components/PreLogin';
import Sit from './components/Sit';
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): JSX.Element {
  // const [user, setUser] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const stack = createNativeStackNavigator();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <stack.Navigator>
          <stack.Screen name="Home" component={Sit} />
          <stack.Screen name="Pre Login" component={PreLogin} />
          <stack.Screen name="Sign In" component={SignIn} />
          <stack.Screen name="Sign Up" component={SignUp} />
          <stack.Screen name="Dog Register" component={DogSignUp} />
        </stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
