import React, { useRef, useState } from 'react'
import { Shuffle, RandomizeBtn, StandardText, SettingsView } from '../styles/stylesMatchingGame'
import Timer from './Timer'
import { Row, RowItem } from '../styles/stylesMatchingGame'
import { Text, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const MiscRow = ({setToggleSettings, navigation}) => {

  return (
    <Row>{/* //@ this should be a seperate component of it's own. */}
      <Timer navigation={navigation} />
      <Ionicons name="md-settings" size={50} color="white" onPress={() => setToggleSettings(true)} style={{bottom: 10}}/>
    </Row>
  )
}

      // <SettingsView>
      //   <StandardText>Restart</StandardText>
      //   <StandardText>Quit</StandardText>
      // </SettingsView>