import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Home from './src/pages/Home';

import Login from './src/pages/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
      {/* <Home /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
