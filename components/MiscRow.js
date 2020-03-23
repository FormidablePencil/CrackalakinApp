import React, { useRef, useState } from 'react'
import { Shuffle, RandomizeBtn, StandardText, SettingsView } from '../styles/stylesMatchingGame'
import Timer from './Timer'
import { Row, RowItem } from '../styles/stylesMatchingGame'
import { Text, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export const MiscRow = ({navigation, setToggleSettingsModal}) => {

  return (
    <Row>
      <Timer navigation={navigation} />
      <Ionicons name="md-settings" size={50} onPress={() => setToggleSettingsModal(true)} color="white" style={{bottom: 10}}/>
    </Row>
  )
}

      // <SettingsView>
      //   <StandardText>Restart</StandardText>
      //   <StandardText>Quit</StandardText>
      // </SettingsView>