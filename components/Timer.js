import React, { useState, useEffect, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TOGGLE } from '../actionsTypes/types';
import { MatchingGameContext } from '../context/ContextMatchingGame'
import { CountdownText } from '../styles/stylesMatchingGame'

const Timer = ({navigation}) => {
  const { playGame, setPlayGame, seconds, setSeconds, cubesLeft, round, setRound, startCountdown } = useContext(MatchingGameContext) // make it so that every correct we give a fraction of the time back

  function handleOnPress() {
    setPlayGame(true)
    console.log(playGame)
  }

  function reset() { //rests
    setPlayGame(false)
    setSeconds(30);
  }
  
  useEffect(() => {
    let interval = null;
    if (startCountdown < 0) {
      console.log('kff')
      if (seconds > 0) {
        interval = setInterval(() => {
          console.log('kqq')
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        setPlayGame(false)
        navigation.navigate('GameOver')
      }
    }
    return () => clearInterval(interval);
  }, [startCountdown, seconds]);

  useEffect(() => {
    if (seconds === 0) {
      setPlayGame(false)
    }
  }, [seconds])


  useEffect(() => {
    if (round !== 0) {
      timerLogic()
    }
  }, [round])


  function timerLogic() {
    switch (true) {
      case seconds >= 20:
        setSeconds(seconds => Math.floor(seconds * 1.1))
        break
      case seconds < 20 && seconds >= 10:
        setSeconds(seconds => Math.floor(seconds * 1.2))
        break
      case seconds < 10 >= 4:
        setSeconds(seconds => Math.floor(seconds * 1.4))
        break
      case seconds < 4:
        setSeconds(seconds => Math.floor(seconds * 2))
        break
      default:
        console.log('something went wrong with the timer')
    }
  }

  return (
    <View>
      <CountdownText>{seconds}s</CountdownText>
      {/* <TouchableOpacity onPress={handleOnPress} style={{ backgroundColor: 'aqua' }}>
        <Text>{playGame ? 'Pause' : 'Start'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={{ backgroundColor: 'aqua' }}>
        <Text>Reset</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Timer;