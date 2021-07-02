import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text,Input, Button} from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Login from './screens/Login';
import Principal from './screens/Principal';
import Cadastro from './screens/Cadastro';

const Stack = createStackNavigator();

function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return(
  <NavigationContainer>
    <MyStack></MyStack>
  </NavigationContainer>
  );
}