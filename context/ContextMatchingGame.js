import React, { createContext, useState, useReducer } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GameScreen from '../screens/GameScreen'
import MenuScreen from '../screens/MenuScreen'
import { NavigationContainer } from '@react-navigation/native'
import GameOverScreen from '../screens/GameOverScreen'
import LoginRegisterScreen from '../screens/LoginRegisterScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ScoreboardScreen from '../screens/ScoreboardScreen'

const Stack = createStackNavigator()

export const MatchingGameContext = createContext()

//! we should move context and navigation into app.js
//@ from what I understand states come with a reducer since they are both in the same file. 
//@ the problem of keeping several states together is that evertime part of the state needs to update it rerenders the component that uses that state including the variables that comps that don't use those particluar variables. So making every variables to have it's own state is most benifitial. 

export function ContextMatchingGameProvider() { 
  const [currentScreenOtherThanGame, setCurrentScreenOtherThanGame] = useState(false) //context
  const [toggleSettingsModal, setToggleSettingsModal] = useState(false) //context

  return (
    <NavigationContainer>
      <MatchingGameContext.Provider value={{
        currentScreenOtherThanGame, setCurrentScreenOtherThanGame,
        toggleSettingsModal, setToggleSettingsModal
      }}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name='LoginRegister' component={LoginRegisterScreen} />
          <Stack.Screen name='Menu' component={MenuScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} /> 
          <Stack.Screen name='Scoreboard' component={ScoreboardScreen} />
          <Stack.Screen name='Game' component={GameScreen} />
          <Stack.Screen name='GameOver' component={GameOverScreen} />
        </Stack.Navigator>
      </MatchingGameContext.Provider>
    </NavigationContainer>
  )
}

//~ profile, scoreboard, loginRegister need to be worked on