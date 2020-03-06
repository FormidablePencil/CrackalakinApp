import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { StartMenuView, HeaderText, StandardText, FlexRow, HeaderTextHighScore } from '../styles/stylesMatchingGame'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { RESET } from '../actionsTypes/types'

const GameMenuScreen = ({ navigation }) => {
  const { setToggleSettings, setDifferentScreen, score, setPlayGame, setSeconds, setStartCountdown, dispatchPrettyBoxProperties, dispatchCubesLeft, dispatchTappedValue, dispatchMatchingGame } = useContext(MatchingGameContext)

  function handleOnPress() {
    actionFunction()
    navigation.navigate('Game')
    setDifferentScreen(false)
  }

  function actionFunction() {
    resetAction()
    reset()
    setPlayGame(true)
    function resetAction() {
      dispatchPrettyBoxProperties({ type: RESET })
      shuffleSquare()
      dispatchCubesLeft({ type: RESET })
      dispatchTappedValue({ type: RESET })
    }

    function shuffleSquare() {
      dispatchMatchingGame({ type: RESET })
    }

    function reset() { //rests
      setToggleSettings(false)
      resetAction()
    }
  }

  return (
    <StartMenuView>
      <StandardText></StandardText>

      <HeaderTextHighScore>High Score: {'9,000'}</HeaderTextHighScore>
      <HeaderText>Lets Get Crackalackin!</HeaderText>
      <StandardText>Score: {score}</StandardText>
      <Button title={'start game'} onPress={handleOnPress} />

      <StandardText></StandardText>
      <StandardText></StandardText>
      <StandardText></StandardText>
    </StartMenuView>
  )
}

export default GameMenuScreen
