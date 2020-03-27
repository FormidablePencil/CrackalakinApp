import React, { useContext, useEffect } from "react";
import { View, Button } from "react-native";
import { Text } from '../styles/TextStyles'
import { MatchingGameContext } from "../context/ContextMatchingGame";
import { NEW_GAME } from "../actionsTypes/types";
import { generateArrayOfNumbers } from "../pureFunctions/logicMatchingGame";
import { connect, useDispatch } from "react-redux";
import { playingWithFetch, postingData } from "../fetching/playingFetch";
import { MaterialIcons } from '@expo/vector-icons'
import { HeaderText, StartMenuView } from "../styles/stylesMatchingGame";
import { ItemInCol, JustifyCenterView } from "../styles/ContainerStyles";
import { ContinueBtn, ActionBtn } from "../styles/BtnStyles";

const GameMenuScreen = ({ navigation, pairOfNumbers, score, savedData }) => {
  const { setCurrentScreenOtherThanGame } = useContext(MatchingGameContext);
  const dispatch = useDispatch();

  function handleOnPressStartGame() {
    dispatch({ type: NEW_GAME });
    navigation.navigate("Game");
    setCurrentScreenOtherThanGame(false);
  }

  return (
    <StartMenuView>
      <MaterialIcons style={{ position: 'absolute', right: 0, margin: 10 }} name="settings" size={50} color='#FEBF3C' onPress={() => navigation.navigate("Profile")} />
      <HeaderText>Lets Get Crackalackin!</HeaderText>
      {/* <HeaderTextHighScore>
        High Score: {savedData.highscore}
      </HeaderTextHighScore> */}
      <ItemInCol>
        <JustifyCenterView style={{}}>
          <Text>High score</Text>
          <Text>32</Text>
        </JustifyCenterView>
        <JustifyCenterView>
          <Text>High round</Text>
          <Text>3</Text>
        </JustifyCenterView>
      </ItemInCol>
      {savedData.score !== 0 ? (
        <StandardText>Score: {savedData.score}</StandardText>
      ) : null}
      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", width: "100%", alignItems: 'center' }}>
        <ActionBtn onPress={handleOnPressStartGame} >
          <Text style={{ fontSize: 25, color: '#fff', fontFamily: 'Bungee-Regular', alignItems: 'center' }}>Start</Text>
        </ActionBtn>
        <ActionBtn onPress={() => navigation.navigate("Scoreboard")} >
          <Text style={{ fontSize: 25, color: '#fff', fontFamily: 'Bungee-Regular', textAlign: 'center' }}>Leader board</Text>
        </ActionBtn>
      </View >
    </StartMenuView >
  );
};

const mapStateToProps = state => {
  return {
    pairOfNumbers: state.pairOfNumbers,
    score: state.score,
    savedData: state.savedData
  };
};

export default connect(mapStateToProps)(GameMenuScreen);
