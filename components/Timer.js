import React, { useState, useEffect, useContext } from 'react';
import { LayoutAnimation, TouchableOpacity, View } from 'react-native';
import { TOGGLE, COUNTING_DOWN_SECONDS, ROUND_OVER, GAME_OVER, TURN_OFF, DECREMENTING_COUNTDOWN } from '../actionsTypes/types';
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { CountdownText } from '../styles/stylesMatchingGame'
import { connect, useDispatch } from 'react-redux';
import { endGameAndCommitData } from '../actionsTypes/actions';

const Timer = ({ navigation, playGame, seconds, score, round, startCountdown, savedData }) => {
  const { currentScreenOtherThanGame, setCurrentScreenOtherThanGame, toggleSettingsModal, setToggleSettingsModal } = useContext(MatchingGameContext) //reason why there's no ability to have a seperate file for actions with useContext is cause it's not meant as a replacement for Redux and heavy use with these method of storing take a hit on the proformance
  const dispatch = useDispatch()

  // 3 SECOND COUNTDOWN LOGIC
  useEffect(() => {
    let interval = null
    if (playGame) {
      if (startCountdown >= 1) {
        interval = setInterval(() => {
          dispatch({ type: DECREMENTING_COUNTDOWN })
        }, 1000)
      }
    } else if (!playGame) {
      clearInterval(interval)
      navigation.navigate('GameOver')
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval); //! these arrow functions I can't seem to fully grasp. Also what's with setInterval
  }, [startCountdown])

  //TIMER LOGIC
  useEffect(() => { //~ onto implementing the soconds countdown (we really need to rename these things)
    let interval = null;
    if (playGame && startCountdown < 1) {
      if (seconds > 0 && playGame === true) {
        interval = setInterval(() => {
          // setSeconds(seconds => seconds - 1);
          dispatch({ type: COUNTING_DOWN_SECONDS })
        }, 1000);
      } else {
        clearInterval(interval);
        // setPlayGame(false)
        navigation.navigate('GameOver')
        dispatch({ type: GAME_OVER })
      }
    }
    return () => clearInterval(interval);
  }, [startCountdown, seconds]);


  useEffect(() => {
    if (seconds === 0 || playGame === false) {
      dispatch(endGameAndCommitData({ score, round, savedData }))
    }
  }, [seconds])


  return (
    <View>
      <CountdownText>{Math.floor(seconds)}s</CountdownText>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    playGame: state.playGame,
    seconds: state.seconds,
    round: state.round,
    startCountdown: state.startCountdown,
    score: state.score,
    savedData: state.savedData
  }
}


export default connect(mapStateToProps)(Timer)
// const { playGame, setPlayGame, seconds, setSeconds, cubesLef ound, setRound, startCountdown } = useContext(MatchingGameContext) // make it so that every correct we give a fraction of the time back