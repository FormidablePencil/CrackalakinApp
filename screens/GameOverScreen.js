import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { AlignContent, StandardText, SettingsView, SettingsItems, SettingsItemsText, HeaderTextHighScore, HeaderText2 } from '../styles/stylesMatchingGame'
import { NEW_GAME } from '../actionsTypes/types'
import { generateArrayOfNumbers } from '../pureFunctions/logicMatchingGame'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { connect } from 'react-redux'
import { matchingGameAction } from '../actionsTypes/actions'

import { useSelector, useDispatch } from 'react-redux'

const GameOverScreen = ({ navigation, score, savedData}) => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const { setCurrentScreenOtherThanGame, setToggleSettingsModal } = useContext(MatchingGameContext) 

  useEffect(() => {
    setCurrentScreenOtherThanGame(true)
  }, [])

  const handlerOnPressRestart = () => {
    setToggleSettingsModal(false)
    setCurrentScreenOtherThanGame(false)
    dispatch({ type: NEW_GAME })
    navigation.navigate('Game')
  }

  const handlerOnPressQuit = () => {
    navigation.navigate('Menu')
  }


  return (
    <AlignContent>
      <HeaderText2>Game Over</HeaderText2>
      <View style={{ marginTop: 20, marginBottom: 50, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <HeaderTextHighScore>Score</HeaderTextHighScore>
          <HeaderTextHighScore>{savedData.score}</HeaderTextHighScore>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <HeaderTextHighScore>High Score</HeaderTextHighScore>
          <HeaderTextHighScore>{savedData.highscore}</HeaderTextHighScore>
        </View>
        {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <HeaderTextHighScore>Highest Round</HeaderTextHighScore>
          <HeaderTextHighScore>{savedData.highestround}</HeaderTextHighScore>
        </View> */}
      </View>
      <SettingsItems onPress={handlerOnPressRestart}><SettingsItemsText>Restart</SettingsItemsText></SettingsItems>
      <SettingsItems onPress={handlerOnPressQuit}><SettingsItemsText>Quit</SettingsItemsText></SettingsItems>
    </AlignContent>
  )
}


const mapStateToProps = (state) => ({
  score: state.score,
  prettyBoxProperties: state.prettyBoxProperties,
  savedData: state.savedData
})

export default connect(mapStateToProps, { matchingGameAction })(GameOverScreen)
