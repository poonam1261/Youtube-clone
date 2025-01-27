import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import "./global.css"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { crea } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen'
import { useNavigation } from '@react-navigation/native';
import SecondScreen from './screens/SecondScreen';

const Stack = createNativeStackNavigator();


export default function App() {



 
  return (
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title:'Welcome', headerShown:false}} />
          <Stack.Screen name="Second" component={SecondScreen} options={{title:'Second Screen'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


