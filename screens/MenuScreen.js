import React, { useContext, useEffect } from "react";
import { View, Text, Button } from "react-native";
import {
  StartMenuView,
  HeaderText,
  StandardText,
  FlexRow,
  HeaderTextHighScore
} from "../styles/stylesMatchingGame";
import { MatchingGameContext } from "../context/ContextMatchingGame";
import { NEW_GAME } from "../actionsTypes/types";
import { generateArrayOfNumbers } from "../pureFunctions/logicMatchingGame";
import { connect, useDispatch } from "react-redux";
import { playingWithFetch, postingData } from "../fetching/playingFetch";

const GameMenuScreen = ({ navigation, pairOfNumbers, score, savedData }) => {
  const { setToggleSettingsModal, setCurrentScreenOtherThanGame } = useContext(
    MatchingGameContext
  );
  const dispatch = useDispatch();

  function handleOnPressStartGame() {
    dispatch({ type: NEW_GAME });
    navigation.navigate("Game");
    setCurrentScreenOtherThanGame(false);
  }
  const logout = () => {
    navigation.navigate("LoginRegister");
  };

  return (
    <StartMenuView>
      <StandardText></StandardText>

      <HeaderTextHighScore>
        High Score: {savedData.highscore}
      </HeaderTextHighScore>
      <HeaderText>Lets Get Crackalackin!</HeaderText>
      {savedData.score !== 0 ? (
        <StandardText>Score: {savedData.score}</StandardText>
      ) : null}
      <Button title={"start game"} onPress={handleOnPressStartGame} />
      <Button title={"playingFetch"} onPress={postingData} />
      <Button title="logout" onPress={logout} />
      <Button title="profile" onPress={() => navigation.navigate("Profile")} />
      <Button
        title="scoreboard"
        onPress={() => navigation.navigate("Scoreboard")}
      />

      <StandardText></StandardText>
      <StandardText></StandardText>
      <StandardText></StandardText>
    </StartMenuView>
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
