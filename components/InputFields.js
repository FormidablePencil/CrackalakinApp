import React, { useState } from "react";
import { Bg, Text, TextInput, Field } from "../styles/stylesLoginReg";
import { View } from "react-native";

//@ reusable component
const InputFields = ({ formInputs, setFormInputs }) => {
  const handleOnChange = (value, whatField) => {
    setFormInputs({ ...formInputs, [whatField]: value.nativeEvent.text });
  };
  return (
    <Field>
      <Text>Username:</Text>
      <TextInput
        type="email"
        name="type"
        value={formInputs.username}
        onChange={value => handleOnChange(value, "username")}
      />
      <Text>Password:</Text>
      <TextInput
        visible-password
        type="password"
        name="password"
        value={formInputs.password}
        onChange={value => handleOnChange(value, "password")}
      />
      <Text>Email:</Text>
      <TextInput
        type="email"
        name="email"
        value={formInputs.email}
        onChange={value => handleOnChange(value, "email")}
      />
    </Field>
  );
};

export default InputFields;
