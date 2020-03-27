import React, { useState } from "react";
import { Button, LayoutAnimation } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";
import { validateInBackend } from "../fetching/playingFetch";
import { Field, Field2 } from "../styles/ContainerStyles";
import { BackBtn, ContinueBtn } from "../styles/BtnStyles";
import { TextBold, TextDarkOrange } from "../styles/TextStyles";
import InputFields from "./InputFields";


const EnteringOptionsComp = ({ navigation, setLoginScreenReady }) => {
  const loginInputSchema = { username: '', password: '' }
  const registerInputSchema = { username: '', password: '', email: '' }
  const [currentInputSchema, setCurrentInputSchema] = useState()
  const [whatInputsToRender, setWhatInputsToRender] = useState();
  const [formInputs, setFormInputs] = useState(loginInputSchema);

  const onPressHandler = () => {
    if (name === 'login') loginValidation(formInputs)
    else if (name === 'register') registerValidation(formInputs)
  }

  const onPressHandlerRunLayoutAnimation = (whatClickedOn) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setWhatInputsToRender(whatClickedOn)
    if (whatClickedOn === 'login') setCurrentInputSchema(loginInputSchema)
    else if (whatClickedOn === 'register') setCurrentInputSchema(registerInputSchema)
  }

  const onPressHandlerGoBack = () => {
    setFormInputs(loginInputSchema)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setWhatInputsToRender()
  }

  if (whatInputsToRender) {
    return (
      <Field>
        <InputFields
          name={whatInputsToRender}
          formInputs={formInputs}
          setFormInputs={setFormInputs}
          inputSchema={currentInputSchema} />
        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
          <BackBtn
            style={{ justifyContent: 'center', alignItems: 'flex-end' }}
            onPress={() => onPressHandlerGoBack()}>
            <TextBold>Go Back</TextBold>
          </BackBtn>
          <ContinueBtn>
            <TextBold>{whatInputsToRender}</TextBold>
          </ContinueBtn>
          {/* //~ could add here an svg animation here */}
        </View>
      </Field>
    );
  } else {
    return (
      <Field2>
        <TouchableOpacity
          onPress={() => onPressHandlerRunLayoutAnimation('login')}>
          <TextDarkOrange>Login</TextDarkOrange>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressHandlerRunLayoutAnimation('register')}>
          <TextDarkOrange>New Account</TextDarkOrange>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setLoginScreenReady(false)
          navigation.navigate("Menu")
        }}>
          <TextDarkOrange>Guest</TextDarkOrange>
        </TouchableOpacity>
      </Field2>
    );
  }
};

export default EnteringOptionsComp;

// cheeseBurger
// Eatit123
