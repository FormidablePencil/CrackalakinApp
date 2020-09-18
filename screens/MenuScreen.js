import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Button, LayoutAnimation } from "react-native";
import { Text } from '../styles/TextStyles'
import { MatchingGameContext } from "../context/ContextMatchingGame";
import { NEW_GAME } from "../actionsTypes/types";
import { generateArrayOfNumbers } from "../pureFunctions/logicMatchingGame";
import { connect, useDispatch } from "react-redux";
import { playingWithFetch, postingData } from "../fetching/playingFetch";
import { MaterialIcons } from '@expo/vector-icons'
import { HeaderText, StartMenuView, StandardText } from "../styles/stylesMatchingGame";
import { ItemInCol, JustifyCenterView } from "../styles/ContainerStyles";
import { ContinueBtn, ActionBtn } from "../styles/BtnStyles";
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from "react-native-gesture-handler";

const StartMenuViewAnimatable = Animatable.createAnimatableComponent(StartMenuView);

const GameMenuScreen = ({ navigation, pairOfNumbers, score, savedData }) => {
  const { setCurrentScreenOtherThanGame } = useContext(MatchingGameContext);
  const dispatch = useDispatch();
  const iconRef = useRef(50)
  const [animationState, setAnimationState] = useState(19)
  const [animation, setanimation] = useState(false)

  const handlerOnAnimationEnd = () => {
    if (animation === true) {
      dispatch({ type: NEW_GAME });
    }
  }


  function handleOnPressStart() {
    setanimation(true)

    // navigation.navigate("Game");
    // setCurrentScreenOtherThanGame(false);
  }
  // useEffect(() => {
  //   if (animation) setanimation(!animation)
  //   else if (!animation) setanimation(!animationState)
  // }, [animation])

  return (
    <View style={{ height: "100%", flex: 1, position: 'absolute', zIndex: 20, backgroundColor: 'rgba(0,0,0,.4)' }}>
      <StartMenuViewAnimatable
        useNativeDriver
        animation={animation && zoomOut}
        onAnimationEnd={handlerOnAnimationEnd}
      >
        {/* //@ here we'll have to use interpolate so you flip it back before animation finishes and giving it a smooth effect vs animatable cutting it off. LayoutAnmimation maybe was the one I expoerimennted on before and acheived this effect */}

        {/* <TouchableOpacity
          onPress={() => setAnimationState(!animationState)}
        >
          <Animatable.Text
            style={{ width: 100, height: 100, backgroundColor: 'yellow' }}
            animation={animationState ? 'flipOutX' : 'bounceIn'}
            onAnimationEnd={() => console.log('onAnimationEnd')}
            easing="ease-in"
          >
            herrererre
          </Animatable.Text>
        </TouchableOpacity> */}



        {/* <MaterialIcons style={{ position: 'absolute', right: 0, margin: 10 }} name="settings" size={50} color='#FEBF3C' onPress={() => navigation.navigate("Profile")} /> */}
        <View>
          <HeaderText>Lets Get</HeaderText>
          <HeaderText>Crackalackin!</HeaderText>
        </View>
        {/* <HeaderTextHighScore>
        High Score: {savedData.highscore}
      </HeaderTextHighScore> */}
        <ItemInCol>
          <JustifyCenterView style={{}}>
            <Text>High score</Text>
            <Text>{savedData.score}</Text>
          </JustifyCenterView>
          <JustifyCenterView>
            <Text>High round</Text>
            <Text>{savedData.round}</Text>
          </JustifyCenterView>
        </ItemInCol>
        {savedData.score !== 0 ? (
          <StandardText>Score: {savedData.score}</StandardText>
        ) : null}
        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", width: "100%", alignItems: 'center' }}>
          <ActionBtn onPress={handleOnPressStart} >
            <Text style={{ fontSize: 25, color: '#fff', fontFamily: 'fredoka-one-regular', alignItems: 'center', }}>START</Text>
          </ActionBtn>
          {/* <ActionBtn onPress={() => navigation.navigate("Scoreboard")} >
            <Text style={{ fontSize: 25, color: '#fff', fontFamily: 'fredoka-one-regular', textAlign: 'center' }}>LEADER BOARD</Text>
          </ActionBtn> */}
        </View >
      </StartMenuViewAnimatable >
    </View>
  );
};

const zoomOut = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.5: {
    opacity: 1,
    scale: 0.3,
  },
  1: {
    opacity: 0,
    scale: 0,
  },
};

const mapStateToProps = state => {
  return {
    pairOfNumbers: state.pairOfNumbers,
    score: state.score,
    savedData: state.savedData
  };
};

export default connect(mapStateToProps)(GameMenuScreen);
