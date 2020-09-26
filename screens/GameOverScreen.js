import React, { useContext, useEffect } from 'react'
import { View } from 'react-native'
import { AlignContent, SettingsItems, SettingsItemsText, HeaderTextHighScore, HeaderText2 } from '../styles/stylesMatchingGame'
import { NEW_GAME } from '../actionsTypes/types'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { connect } from 'react-redux'
import { matchingGameAction } from '../actionsTypes/actions'
import { Text } from '../styles/TextStyles'

import { useSelector, useDispatch } from 'react-redux'

const GameOverScreen = ({ navigation, score, savedData }) => {
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
    navigation.navigate('Game')
  }


  return (
    <AlignContent>
      <HeaderText2>Game Over</HeaderText2>
      <View style={{ marginTop: 20, marginBottom: 50, flexDirection: 'row', justifyContent: 'space-around', width: '100%', display: 'flex', flexDirection: "column" }}>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#CACACA' }}>High Score</Text>
            <Text>{savedData.highscore}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#CACACA' }}>High Round</Text>
            <Text>{savedData.highestround}</Text>
          </View>
        </View>

        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#BFB78D' }}>Score</Text>
            <Text style={{ color: '#FFEE85' }}>{savedData.score}</Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#BFB78D' }}>round</Text>
            <Text style={{ color: '#FFEE85' }}>{savedData.round}</Text>
          </View>
        </View>

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
