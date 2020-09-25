import React, { useContext, useState } from "react";
import { ImageBackground, Button, View, LayoutAnimation } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import EnteringOptionsComp from "../components/EnteringOptionsComp";
import { Video } from "expo-av";
import { H1 } from "../styles/TextStyles";
import { Bg } from "../styles/ContainerStyles";
import { PlayBtn } from "../styles/BtnStyles";
import { MatchingGameContext } from "../context/ContextMatchingGame";
import LoadingComp from "../components/LoadingComp";
import { authentication } from '../App'
import styled from "styled-components";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const LoginRegisterScreen = ({ navigation }) => {
  // const { setLoginScreenReady } = useContext(MatchingGameContext)
  const [loginScreenReady, setLoginScreenReady] = useState(false)

  return (
    <LinearGradient colors={['#FFB755', '#FF645B']}>
      <View style={{ position: 'relative', height: '100%', background: 'transparent' }}>
        <Video
          onReadyForDisplay={() => {
            setLoginScreenReady(true)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
          }}
          // source={vid}
          rate={1.0}
          volume={0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: '100%', height: '100%', position: 'absolute' }}
        />

        {!authentication ?
          <CenterView>
            <H1
              style={{ position: 'absolute', top: 110 }}
            >What's</H1>
            <H1
              style={{ position: 'absolute', top: 150 }}
            >Crackilackin</H1>
            <View style={{ marginTop: 200 }}>
              <PlayBtn
                onPress={() => {
                  setLoginScreenReady(false)
                  navigation.navigate("Game")
                }}
              ><H1>Play</H1></PlayBtn>
            </View>
          </CenterView>
          :
          <>
            <Bg>
              <H1>Crackilackin</H1>
              <KeyboardAvoidingView style={{ width: "100%" }} behavior="position">
                <EnteringOptionsComp navigation={navigation} setLoginScreenReady={setLoginScreenReady} />
              </KeyboardAvoidingView>
            </Bg>
            {loginScreenReady === false &&
              <LoadingComp />
            }
          </>
        }

      </View >
    </LinearGradient >
  );
};

export default LoginRegisterScreen;

const CenterView = styled.View`
  height: 100%;
  width: 100%;
  justify-content:center;
  align-items:center;
`