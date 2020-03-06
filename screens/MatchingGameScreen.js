import React, { useEffect, useContext, useRef, useState } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { VerticallyAlign, ScoreCount, AlignContent, ScoreCountText, SettingsView, SettingsItemsText, StandardText, Round, BottomRow, CountText, SettingsItems, StartingCountdownView } from '../styles/stylesMatchingGame'
import GridOfPrettyBoxes from '../components/GridOfPrettyBoxes'
import { MiscRow } from '../components/MiscRow'
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { CHANGE_BOX_TO_UNPRESSABLE, RESET, RESET_ONLY_PRESSIBLE_PROPERTY_OF_ALL_BOXES, SET_TAPPED, SET_PAIR_OF_SELECTED_ELEMENTS_INVISIBLE, DECREMENT, INCREMENT } from '../actionsTypes/types'

const width = Math.round(Dimensions.get('window').width);

//@ 1. wrap this whole application with Redux
//@ 2. set up store, reducers and actions with the help of flashcards app as reference
//@ 3. refractor the code by putting all actions into seperate actions file, set up reducers and keep only a few simple states in Context such as toggleSettings; things that aren't fired often. 
// Now we should have a finished product, moving onto the next one. Perhaps a money lender tracker app sounds like a good idea.

export default function MatchingGameScreen({ navigation, }) { 
  const {
    cubesLeft, dispatchCubesLeft,
    score, dispatchScore,
    matchingGame, dispatchMatchingGame,
    prettyBoxProperties, dispatchPrettyBoxProperties,
    tappedValue, dispatchTappedValue,
    playGame, setPlayGame,
    round, setRound,
    startCountdown, setStartCountdown,
    setSeconds,
    differentScreen, setDifferentScreen,
    toggleSettings, setToggleSettings
  } = useContext(MatchingGameContext) //reason why there's no ability to have a seperate file for actions with useContext is cause it's not meant as a replacement for Redux and heavy use with these method of storing take a hit on the proformance

  //@ every correct +100 points (or depending on the color + certian amount of points), add more time to timer and to add a sense of ergency (thus addiction) every round won randomize multiple times.
  //~ all I got left to do is create a time and a scoreboard... Which will involve the backend
  //? when you can start the game, incrementing timer if corrct and deduction if not and when countdown is over that's when we are done with the app. Backend stuff is later on.

  function evaluatePlayerInput(value, whatBox) { //@ I think this is what you'll call a pure function 
    switch (true) {
      case prettyBoxProperties[whatBox].pressable === false:
        return 'element already selected'
      case typeof tappedValue === 'number' && value === tappedValue:
        return 'correct'
      case typeof tappedValue === 'number' && value !== tappedValue:
        return 'incorrect'
      case !tappedValue:
        return 'firstBoxSelected'
      default:
        console.log('something went wrong')
    }
  }
  const matchingGameAction = (value, whatBox) => { //! what would be cool is if I made this game multimplayer as wells as tic tack toe

    const evaluatedPlayerInput = evaluatePlayerInput(value, whatBox)
    switch (evaluatedPlayerInput) {
      case 'correct':
        dispatchScore({ type: INCREMENT })
        const firstMatchingBox = matchingGame.indexOf(value)
        const secondMatchingBox = matchingGame.lastIndexOf(value)
        dispatchTappedValue({ type: RESET })
        dispatchPrettyBoxProperties({
          type: SET_PAIR_OF_SELECTED_ELEMENTS_INVISIBLE,
          payload: { firstMatchingBox: firstMatchingBox, secondMatchingBox: secondMatchingBox }
        })
        dispatchPrettyBoxProperties({ type: RESET_ONLY_PRESSIBLE_PROPERTY_OF_ALL_BOXES })
        dispatchCubesLeft({ type: DECREMENT })
        console.log('correct')
        break
      case 'incorrect':
        dispatchPrettyBoxProperties({ type: RESET_ONLY_PRESSIBLE_PROPERTY_OF_ALL_BOXES })
        dispatchTappedValue({ type: RESET }) //clearing tapped value
        console.log('incorrect')
        break
      case 'firstBoxSelected':
        dispatchPrettyBoxProperties({ type: CHANGE_BOX_TO_UNPRESSABLE, payload: whatBox })
        dispatchTappedValue({ type: SET_TAPPED, payload: value })
        // console.log('selected matching sqaure')
        break
      case 'element already selected':
        console.log('already selected')
        break
      default:
        console.log('bug likely in MatchingGameScreen')
    }
  }


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
    // setStartCountdown(3)
    setSeconds(3000)
    setToggleSettings(false)
    resetAction()
  }

  useEffect(() => {
    if (cubesLeft === 0) {
      //action... reests everything
      resetAction()
      setRound(round => round + 1)
    }
  }, [cubesLeft])

  useEffect(() => {
    let interval = null
    if (playGame && differentScreen !== true) {
      if (startCountdown >= 0) {
        shuffleSquare()
        // resetAction()
        interval = setInterval(() => {
          console.log('startCountdown')
          setStartCountdown(countdown => countdown - 1)
          dispatchPrettyBoxProperties({ type: RESET })
        }, 1000)
      }
    } else if (!playGame && differentScreen !== true) {
      clearInterval(interval)
      navigation.navigate('GameOver')
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval); //! these arrow functions I can't seem to fully grasp. Also what's with setInterval
  }, [startCountdown])

  useEffect(() => {
    if (playGame) {
      reset()
      resetAction()
    }
  }, [playGame])

  //@ create a countdown interval for count and make at the same time allow the cubes to change colors multiple times and later on make it so with animations to transition from one value into another but every box diffrently... That should take setting a transition and delay randomly on every box element
  //@ make the numbers zoom into view when counting

  function handleOnPressQuit() {
    setStartCountdown()
    setPlayGame(false)
    setDifferentScreen(true)
    navigation.navigate('GameMenu')
  }

  return (
    <View style={{ flex: 1 }}>
      <AlignContent>
        <View>
          <MiscRow navigation={navigation} setToggleSettings={setToggleSettings} />
          <VerticallyAlign style={{ height: width * 1.33 }}>
            <GridOfPrettyBoxes matchingGame={matchingGame} matchingGameAction={matchingGameAction} prettyBoxProperties={prettyBoxProperties} />
          </VerticallyAlign>
          <BottomRow>
            <View>
              <CountText>{round}</CountText>
              <StandardText>ROUND</StandardText>
            </View>
            <CountText>{score}</CountText>
          </BottomRow>
        </View>
      </AlignContent>
      {startCountdown >= 0 ?
        <StartingCountdownView><StandardText>{startCountdown}</StandardText></StartingCountdownView>
        : null}
      {toggleSettings ?
        <SettingsView>
          <SettingsItems><SettingsItemsText onPress={reset}>Restart</SettingsItemsText></SettingsItems>
          <SettingsItems onPress={handleOnPressQuit}><SettingsItemsText>Quit</SettingsItemsText></SettingsItems>
          <SettingsItems onPress={() => setToggleSettings(false)}><SettingsItemsText>Cancel</SettingsItemsText></SettingsItems>
        </SettingsView>
        : null
      }
    </View>
  )
}

//? how would I make a grid with wrapp without the need of doing what I did next time?
//? learn es6 stuff. There're alot very useful things I'm perhaps missing out on