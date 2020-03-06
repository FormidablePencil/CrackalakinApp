import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AlignContent, StandardText, SettingsView, SettingsItems, SettingsItemsText, HeaderTextHighScore, HeaderText } from '../styles/stylesMatchingGame'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { RESET } from '../actionsTypes/types'

const GameOverScreen = ({ navigation }) => {
  const { setToggleSettings, setDifferentScreen, score, setPlayGame, setSeconds, setStartCountdown, dispatchPrettyBoxProperties, dispatchCubesLeft, dispatchTappedValue, dispatchMatchingGame } = useContext(MatchingGameContext)

  function handlerOnPressRestart() {
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
      setStartCountdown(3)
      resetAction()
    }
  }

  return (
    <AlignContent>
      <HeaderText>Game Over</HeaderText>
      <View style={{ marginTop: 20, marginBottom: 50, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <HeaderTextHighScore>Score</HeaderTextHighScore>
          <HeaderTextHighScore>{score}</HeaderTextHighScore>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <HeaderTextHighScore>High Score</HeaderTextHighScore>
          <HeaderTextHighScore>{score}</HeaderTextHighScore>
        </View>
      </View>
      <SettingsItems onPress={handlerOnPressRestart}><SettingsItemsText>Restart</SettingsItemsText></SettingsItems>
      <SettingsItems onPress={() => navigation.navigate('GameMenu')}><SettingsItemsText>Quit</SettingsItemsText></SettingsItems>
    </AlignContent>
  )
}

export default GameOverScreen
