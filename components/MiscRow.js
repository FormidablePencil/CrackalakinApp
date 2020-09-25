import React, { useRef, useState } from 'react'
import { Shuffle, RandomizeBtn, StandardText, SettingsView } from '../styles/stylesMatchingGame'
import Timer from './Timer'
import { Row, RowItem } from '../styles/stylesMatchingGame'
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../styles/TextStyles';
import { useSelector } from 'react-redux';

export const MiscRow = ({ navigation, setToggleSettingsModal }) => {
  
  return (
    <Row style={{ position: 'absolute', top: 40 }}>
      <Timer navigation={navigation} />
      <Ionicons name="md-settings" size={50} onPress={() => setToggleSettingsModal(true)} color="white" style={{ bottom: 10 }} />
    </Row>
  )
}

      // <SettingsView>
      //   <StandardText>Restart</StandardText>
      //   <StandardText>Quit</StandardText>
      // </SettingsView>