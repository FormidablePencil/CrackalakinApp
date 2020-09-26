import React, { useRef, useState } from 'react'
import { Shuffle, RandomizeBtn, StandardText, SettingsView } from '../styles/stylesMatchingGame'
import Timer from './Timer'
import { Row, RowItem } from '../styles/stylesMatchingGame'
import { Ionicons } from '@expo/vector-icons';
import { Text } from '../styles/TextStyles';
import { useSelector } from 'react-redux';

export const MiscRow = ({ hideSettingsIcon, navigation, setToggleSettingsModal }) => {
  return (
    <Row style={{ position: 'absolute', top: 40, zIndex: 50 }}>
      <Timer navigation={navigation} setToggleSettingsModal={setToggleSettingsModal} />
      {hideSettingsIcon &&
        <SettingsBtn setToggleSettingsModal={setToggleSettingsModal} />
      }
    </Row>
  )
}

export const SettingsBtn = ({ setToggleSettingsModal }) =>
  <Ionicons name="md-settings" size={50} onPress={() => setToggleSettingsModal(true)} color="white" style={{ bottom: 10 }} />
