import React from "react";
import { Text, Button, View } from "react-native";
import { Bg } from "../styles/stylesLoginReg";

const ProfileScreen = ({ navigation }) => {
  return (
    <Bg>
      <Text>Hi from ProfileScreen</Text>
      <View>
        <Text>Username</Text>
        <Text>Email</Text>
        <Text>High score</Text>
        <Text>High round</Text>
      </View>

      <Button title="Menu" onPress={() => navigation.navigate("Menu")} />
    </Bg>
  );
};

export default ProfileScreen;
