import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  GoogleSignin.configure({
    webClientId:
      '799266533322-jsk1884q4bgfrblbdl1lsi3me2p3c525.apps.googleusercontent.com',
  });

  const onGoogleButtonPress = async () => {
    GoogleSignin.configure({
      ClientId:
        '518463237638-s7l90rqkf2dnarcc55btvkaqbv8nv49b.apps.googleusercontent.com',
    });

    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    console.log(idToken);

    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // const user_sign_in = auth().signInWithCredential(googleCredential);

    // user_sign_in
    //   .then(user => {
    //     console.log('Login Sucess', user);
    //   })
    //   .catch(error => {
    //     console.log('Login error', error);
    //     throw error;
    //   });

    // console.log(user_sign_in);
  };

  const signIn = async () => {
    try {
      GoogleSignin.configure({
        //webClientId is required if you need offline access
        // offlineAccess: true,
        // webClientId:
        //   '518463237638-s7l90rqkf2dnarcc55btvkaqbv8nv49b.apps.googleusercontent.com',
        // androidClientId:
        //   '3242343242322432-2342323432232324343323.apps.googleusercontent.com',
        // scopes: ['profile', 'email'],

        ClientId:
          '518463237638-s7l90rqkf2dnarcc55btvkaqbv8nv49b.apps.googleusercontent.com',
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // setState({userInfo});
      console.log({userInfo});
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
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
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
