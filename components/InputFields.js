import React, { useState } from "react";
import { Button, View } from "react-native";
import { loginValidation, registerValidation } from "../fetching/playingFetch";
import { TextDarkOrange } from "../styles/TextStyles";
import { TextInput } from "../styles/globalStyles";


//@ reusable component
export const InputFields = ({ formInputs, setFormInputs, inputSchema, name }) => {
  const handleOnChange = (value, whatField) => {
    setFormInputs({ ...formInputs, [whatField]: value.nativeEvent.text }); //!  maybe unneccesay to keep state in parent
  };
  return (
    <View >
      {Object.keys(inputSchema).map(whatInputField =>
        whatInputField !== 'password' ?
          <View key={whatInputField}>
            <TextDarkOrange>{whatInputField}:</TextDarkOrange>
            <TextInput
              type="email"
              name="type"
              value={formInputs[whatInputField]}
              onChange={value => handleOnChange(value, [whatInputField])}
            />
          </View>
          :
          <View key={whatInputField}>
            <TextDarkOrange>{whatInputField}:</TextDarkOrange>
            <TextInput
              secureTextEntry={true}
              secureTextEntry={true}
              type="email"
              name="type"
              value={formInputs[whatInputField]}
              onChange={value => handleOnChange(value, [whatInputField])}
            />
          </View>
      )}
    </View>
  );
};

export default InputFields;
