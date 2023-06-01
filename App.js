import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  GoogleSignin.configure({
    webClientId:
      '799266533322-jsk1884q4bgfrblbdl1lsi3me2p3c525.apps.googleusercontent.com',
  });

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        console.log(error);
        throw error;
      });
  };

  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{backgroundColor: 'yellow'}}>Dashboard</Text>
      <Button title=" Sign With Google" onPress={onGoogleButtonPress} />
    </View>
  );
};

export default App;
