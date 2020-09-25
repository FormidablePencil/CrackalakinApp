import React, { useEffect, useContext } from 'react'
import { Text, View } from 'react-native'
import { AlignContent, SettingsView, SettingsItemsText, StandardText, BottomRow, CountText, SettingsItems, StartingCountdownView } from '../styles/stylesMatchingGame'
import GridOfPrettyBoxes from '../components/GridOfPrettyBoxes'
import { MiscRow } from '../components/MiscRow'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { NEW_GAME, GAME_OVER, ROUND_OVER } from '../actionsTypes/types'
import { connect, useDispatch } from 'react-redux'
import MenuScreen from './MenuScreen'
import { cacheDataToAsyncStorageObj as asyncStorageMethods } from '../hooks/cacheDataToAsyncStorageObj'

export const GameScreen = ({ navigation, pairOfNumbers, cubesLeft, score, playGame, round, startCountdown, prettyBoxProperties }) => {
  const { setCurrentScreenOtherThanGame, toggleSettingsModal, setToggleSettingsModal } = useContext(MatchingGameContext)
  const dispatch = useDispatch()

  useEffect(() => {
    if (cubesLeft === 0) {
      setTimeout(() => {
        dispatch({ type: ROUND_OVER })
      }, 500);
    }
  }, [cubesLeft])

  useEffect(() => {
    if (playGame === true) {
      dispatch({ type: NEW_GAME })
    }
  }, [playGame])

  const handlerOnPressRestart = () => {
    dispatch({ type: NEW_GAME })
    setToggleSettingsModal(false)
  }

  const handleOnPressQuit = () => {
    navigation.navigate('Game')
    dispatch({ type: NEW_GAME })
    dispatch({ type: GAME_OVER })
    setCurrentScreenOtherThanGame(true)
    setToggleSettingsModal(false)
  }

  return (
<<<<<<< HEAD
    <View style={{ flex: 1 }}>
=======
    <View style={{ flex: 1, position: 'relative' }}>

>>>>>>> first-release-version
      {playGame === false &&
        <MenuScreen navigation={navigation} />
      }
      <AlignContent>
        {playGame &&
          <MiscRow navigation={navigation} setToggleSettingsModal={setToggleSettingsModal} />
        }
        <GridOfPrettyBoxes pairOfNumbers={pairOfNumbers} />
        {playGame &&
          <BottomRow>
            <View>
              <CountText>{round}</CountText>
              <StandardText>ROUND</StandardText>
            </View>
            <CountText>{score}</CountText>
          </BottomRow>
        }
      </AlignContent>
      {startCountdown >= 0 && playGame ?
        <StartingCountdownView><StandardText>{startCountdown}</StandardText></StartingCountdownView>
        : null
      }
      {toggleSettingsModal ?
        <SettingsView>
          <SettingsItems onPress={handlerOnPressRestart}><SettingsItemsText>Restart</SettingsItemsText></SettingsItems>
          <SettingsItems onPress={handleOnPressQuit}><SettingsItemsText>Quit</SettingsItemsText></SettingsItems>
          <SettingsItems onPress={() => setToggleSettingsModal(false)}><SettingsItemsText>Cancel</SettingsItemsText></SettingsItems>
        </SettingsView>
        : null
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    pairOfNumbers: state.pairOfNumbers,
    tappedValue: state.tappedValue,
    cubesLeft: state.cubesLeft,
    score: state.score,
    prettyBoxProperties: state.prettyBoxProperties,
    playGame: state.playGame,
    round: state.round,
    startCountdown: state.startCountdown,
  }
}

export default connect(mapStateToProps, null)(GameScreen)