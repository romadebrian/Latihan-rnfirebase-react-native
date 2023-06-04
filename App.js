import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import {AuthContextProvider} from './src/config/context';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
