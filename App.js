import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderHeightContext, HeaderTitle } from '@react-navigation/stack';

import { Platform, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';

import  Header  from './app/views/Header';
import Homepage from './app/views/Home';

const Stack = createStackNavigator();
 
 export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  // });

  // if(!fontsLoaded) {
  //   return <AppLoading/>
  // }

  return (
   <NavigationContainer 
    style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
   >
     <Stack.Navigator 
        initialRouteName="Globomantics"
        headerMode="screen"
        >
       <Stack.Screen
          name="Globomantics"
          component={Homepage}
          options={{
            headerTitle: (props) => <Header {...props} text="I am a fricking jedi masta."/>
          }}
       />
      
     </Stack.Navigator>
   </NavigationContainer>
    
  );
}

