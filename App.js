import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import { ProviderUserInfo } from "./src/config/context";

const Stack = createNativeStackNavigator();

const App = () => {
  const [coba] = useState("Roma Debrian");
  return (
    <ProviderUserInfo>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderUserInfo>
  );
};

export default App;

const styles = StyleSheet.create({});
