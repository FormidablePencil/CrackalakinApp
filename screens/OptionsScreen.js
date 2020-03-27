import React, { useState } from "react";
import { Button, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Text } from "../styles/TextStyles";
import { ItemInColOptions } from "../styles/ContainerStyles";
import { Options } from "../styles/BtnStyles";

const ProfileScreen = ({ navigation }) => {
  const [moreOptionsDropdownToggle, setMoreOptionsDropdownToggle] = useState()
  const userData = useSelector(state => state.userData)
  //~ 1. get everything into this page
  //~ 2. lay it all out decently
  //~ 3. create animation transitions but don't worry too much about the colorations of the page
  //~ 4. move on to the scoreboard and do the same thing
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', height: '100%' }}
        onPress={() => navigation.navigate("Menu")}>
        <Text style={{ backgroundColor: '#D69D1E', paddingLeft: 10, paddingRight: 10, margin: 10, borderRadius: 5 }}>Back</Text>
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <TouchableOpacity>
        <Text style={{ fontSize: 5, left: 10 }}>Somecool animation here perhaps</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity>
        <Text>EatLikeMe2000</Text>
      </TouchableOpacity>
    )
  });

  return (
    <View style={{ backgroundColor: 'black', flex: 1, justifyContent: "space-evenly", alignItems: 'center', backgroundColor: 'rgb(50, 50, 51)' }}>
      <ItemInColOptions>
        <Options><Text>change theme (switch)</Text></Options>
        <Options><Text>More options (dropdown)</Text></Options>
        <Options onPress={() => navigation.navigate("LoginRegister")} ><Text>logout</Text></Options>
        {moreOptionsDropdownToggle &&
          <View>
            <Text>Change username</Text>
            <Text></Text>
            <Text>Change backup email: eatingEverythang@gmail.com</Text>
            <Text>delete account all together</Text>
          </View>
        }
      </ItemInColOptions>
    </View>
  );
};

export default ProfileScreen;
