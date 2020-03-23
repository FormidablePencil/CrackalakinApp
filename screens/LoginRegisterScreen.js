import React, { useState } from "react";
import { Bg, Text, H1 } from "../styles/stylesLoginReg";
import InputFields from "../components/InputFields";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ImageBackground, Button } from "react-native";
import liquid from "../assets/liquid.jpg";

const LoginRegisterScreen = ({ navigation }) => {
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "", //! make it so it doesn't show...
    email: ""
  });
  return (
    <ImageBackground source={liquid} style={{ width: "100%", height: "100%" }}>
      <Bg>
        <H1>Crackilackin</H1>
        <InputFields formInputs={formInputs} setFormInputs={setFormInputs} />
      </Bg>
      <Button
        title="validation btn"
        onPress={() => navigation.navigate("Menu")}
      />
    </ImageBackground>
  );
};

export default LoginRegisterScreen;
