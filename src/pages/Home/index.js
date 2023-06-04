import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { UserInfoContext } from "../../config/context";

const Home = ({ navigation }) => {
  const userContext = useContext(UserInfoContext);

  // console.log(dataUser.state);
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      userContext.dispatch("SIGN_OUT");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
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
      <Text>Home</Text>
      <Button title="Logout" onPress={signOut} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
