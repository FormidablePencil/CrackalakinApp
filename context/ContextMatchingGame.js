import React, { createContext, useState, useReducer } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GameScreen from '../screens/GameScreen'
import MenuScreen from '../screens/MenuScreen'
import { NavigationContainer } from '@react-navigation/native'
import GameOverScreen from '../screens/GameOverScreen'
import LoginRegisterScreen from '../screens/LoginRegisterScreen'
import OptionsScreen from '../screens/OptionsScreen'
import ScoreboardScreen from '../screens/ScoreboardScreen'
import Animations from '../animatedComps/Animations'
import Animations2 from '../animatedComps/Animations2'
import Animations3 from '../animatedComps/Animations3'
import Animations4 from '../animatedComps/Animations4'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../styles/globalStyles'
import useHandleScoreLocalStorage from '../hooks/useHandleScoreLocalStorage'

const Stack = createStackNavigator()

export const MatchingGameContext = createContext()

//! we should move context and navigation into app.js
//@ from what I understand states come with a reducer since they are both in the same file. 
//@ the problem of keeping several states together is that evertime part of the state needs to update it rerenders the component that uses that state including the variables that comps that don't use those particluar variables. So making every variables to have it's own state is most benifitial. 

export function ContextMatchingGameProvider() {
  const [currentScreenOtherThanGame, setCurrentScreenOtherThanGame] = useState(false) //context
  const [toggleSettingsModal, setToggleSettingsModal] = useState(false) //context
  const [loginScreenReady, setLoginScreenReady] = useState(false)

  useHandleScoreLocalStorage()
  
  return (
    <NavigationContainer>
      <MatchingGameContext.Provider value={{
        currentScreenOtherThanGame, setCurrentScreenOtherThanGame,
        toggleSettingsModal, setToggleSettingsModal,
        loginScreenReady, setLoginScreenReady
      }}>
        <Stack.Navigator screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'gray'
          }
        }}>
          <Stack.Screen name='LoginRegister'
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            component={LoginRegisterScreen} />
          <Stack.Screen name='Game' component={GameScreen} />
          <Stack.Screen options={{
            headerShown: true,
            // headerLeft: () => (
            // )
          }}
            name='Profile' component={OptionsScreen} />
          {/* <Stack.Screen name='Animations'
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            component={Animations4} /> */}
          {/* <Stack.Screen name='Menu' component={MenuScreen}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          /> */}
          <Stack.Screen name='Scoreboard' component={ScoreboardScreen} />
          <Stack.Screen name='GameOver' component={GameOverScreen} />
        </Stack.Navigator>
      </MatchingGameContext.Provider>
    </NavigationContainer>
  )
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 5000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
