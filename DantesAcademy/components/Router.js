// import React from 'react';

// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaView} from 'react-native';

// import SignIn from './SignIn';
// import Home from './Home';
// import SignUp from './SignUp';
// import DogSignUp from './DogSignUp';
// import PreLogin from './PreLogin';
// import OpenedCommand from './OpenedCommand';
// import BottomMenu from './BottomMenu';
// import ProfileScreen from './ProfileScreen';
// import NewSessionScreen from './NewSessionScreen';
// import {useColorScheme} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import auth from '@react-native-firebase/auth';
// const stack = createNativeStackNavigator();

// export default function Router() {
//   const isDarkMode = useColorScheme() === 'dark';
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//     flex: 1,
//   };
//   return (
//     <NavigationContainer>
//       <SafeAreaView style={backgroundStyle}>
//         <stack.Navigator initialRouteName="Pre Login">
//           <stack.Screen
//             name="Pre Login"
//             component={PreLogin}
//             options={{title: ''}}
//           />
//           <stack.Screen name="Home" component={Home} />
//           <stack.Screen name="Sign In" component={SignIn} />
//           <stack.Screen name="Sign Up" component={SignUp} />
//           <stack.Screen name="Dog Register" component={DogSignUp} />
//           <stack.Screen name="New Session" component={NewSessionScreen} />
//           <stack.Screen name="Profile" component={ProfileScreen} />
//           <stack.Screen
//             name="Opened Command"
//             options={{title: 'Command Name'}}
//             component={OpenedCommand}
//           />
//         </stack.Navigator>
//       </SafeAreaView>
//       {auth().currentUser && <BottomMenu />}
//     </NavigationContainer>
//   );
// }
