import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useContext } from "react";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { useFocusEffect } from "@react-navigation/native";
import { UserInfoContext } from "../../config/context";

const Login = ({ navigation }) => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const userContext = useContext(UserInfoContext);

  GoogleSignin.configure({
    //webClientId is required if you need offline access
    // offlineAccess: true,
    // webClientId:
    //   '518463237638-s7l90rqkf2dnarcc55btvkaqbv8nv49b.apps.googleusercontent.com',
    // androidClientId:
    //   '3242343242322432-2342323432232324343323.apps.googleusercontent.com',
    // scopes: ['profile', 'email'],

    ClientId:
      "518463237638-s7l90rqkf2dnarcc55btvkaqbv8nv49b.apps.googleusercontent.com",
  });

  useFocusEffect(
    React.useCallback(() => {
      // const datauser = useAuthState();
      // console.log(datauser);
    }, [])
  );

  const onGoogleButtonPress = async () => {
    userContext.dispatch("SIGN_IN", "Roma Debrian");
    navigation.navigate("Home");
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { user } = await GoogleSignin.signIn();

      userContext.dispatch("SIGN_IN", user);
      navigation.navigate("Home");
      // setState({userInfo});
      // console.log(user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Login</Text>
      <Button title=" Sign With Google" onPress={onGoogleButtonPress} />
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={isSigninInProgress}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
