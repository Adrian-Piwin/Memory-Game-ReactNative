import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardList from './CardList';
import Card from './components/Card';
import { ScreenOrientation } from 'expo';
import WelcomPage from './WelcomePage';
import GamePage from './GamePage';


import * as firebase from 'firebase'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'





export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen
          name="WelcomPage"
          component={WelcomPage}
          options={{ title: 'Welcome' }}
          style={styles.container}
        />
        <Stack.Screen name="GamePage" component={GamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
