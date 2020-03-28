import React, { useContext, useState } from "react";
import { ImageBackground, Button, View, LayoutAnimation } from "react-native";
import liquid from "../assets/liquid.jpg";
import { KeyboardAvoidingView } from "react-native";
import EnteringOptionsComp from "../components/EnteringOptionsComp";
import { Video } from "expo-av";
import vid from '../assets/video.mp4'
import { H1 } from "../styles/TextStyles";
import { Bg } from "../styles/ContainerStyles";
import { MatchingGameContext } from "../context/ContextMatchingGame";
import LoadingComp from "../components/LoadingComp";

const LoginRegisterScreen = ({ navigation }) => {
  // const { setLoginScreenReady } = useContext(MatchingGameContext)
  const [loginScreenReady, setLoginScreenReady] = useState(false)
  return (
    <View style={{ position: 'relative', height: '100%' }}>
      <Video
        onReadyForDisplay={() => {
          setLoginScreenReady(true)
          LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
        }}
        source={vid}
        rate={1.0}
        volume={0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      />
      <Bg>
        <H1>Crackilackin</H1>
        <KeyboardAvoidingView style={{ width: "100%" }} behavior="position">
          <EnteringOptionsComp navigation={navigation} setLoginScreenReady={setLoginScreenReady} />
        </KeyboardAvoidingView>
      </Bg>
      {loginScreenReady === false &&
        <LoadingComp />
      }
    </View>
  );
};

export default LoginRegisterScreen;
