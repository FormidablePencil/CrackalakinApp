import React, { useEffect, useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { AlignContent, SettingsView, SettingsItemsText, StandardText, BottomRow, CountText, SettingsItems, StartingCountdownView } from '../styles/stylesMatchingGame'
import GridOfPrettyBoxes from '../components/GridOfPrettyBoxes'
import { MiscRow, SettingsBtn } from '../components/MiscRow'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { NEW_GAME, GAME_OVER, ROUND_OVER } from '../actionsTypes/types'
import { connect, useDispatch } from 'react-redux'
import MenuScreen from './MenuScreen'
import { cacheDataToAsyncStorageObj as asyncStorageMethods } from '../hooks/cacheDataToAsyncStorageObj'

export const GameScreen = ({ navigation, pairOfNumbers, cubesLeft, score, playGame, round, startCountdown, prettyBoxProperties }) => {
  const { setCurrentScreenOtherThanGame, toggleSettingsModal, setToggleSettingsModal } = useContext(MatchingGameContext)
  const [hideSettingsIcon, setHideSettingsIcon] = useState(false)
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

  useEffect(() => {
    if (toggleSettingsModal) return setHideSettingsIcon(false)
    if (startCountdown >= 1) setHideSettingsIcon(true)
    if (startCountdown === 0) setHideSettingsIcon(true)
  }, [startCountdown, toggleSettingsModal])

  const handlerOnPressRestart = () => {
    dispatch({ type: NEW_GAME })
    setToggleSettingsModal(false)
  }

  const handleOnPressQuit = () => {
    navigation.navigate('Game')
    // await dispatch({ type: NEW_GAME })
    dispatch({ type: GAME_OVER })
    setCurrentScreenOtherThanGame(true)
    setToggleSettingsModal(false)
  }

  return (
    <View style={{ flex: 1 }}>
      {playGame === false &&
        <MenuScreen navigation={navigation} />
      }
      <AlignContent>
        {playGame &&
          <MiscRow
            hideSettingsIcon={hideSettingsIcon}
            navigation={navigation}
            setToggleSettingsModal={setToggleSettingsModal} />
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
      {startCountdown >= 1 && playGame ?
        <StartingCountdownView>
          {hideSettingsIcon &&
            <View style={{ position: "absolute", top: 65, right: 20 }}>
              <SettingsBtn setToggleSettingsModal={setToggleSettingsModal} />
            </View>
          }
          <StandardText style={{fontSize: 60}}>{startCountdown}</StandardText>
        </StartingCountdownView>
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