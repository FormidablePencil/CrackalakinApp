import React from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {AntDesign} from '@expo/vector-icons'

const LoadingComp = () => {
   return (
      <View style={{ width: '100%', height: '100%', backgroundColor: 'black', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
         <Animatable.View animation='rotate' easing="linear" iterationCount="infinite" duration={800}  >
            <AntDesign name='loading1' size={100} color='orange' />
         </Animatable.View>
      </View>
   )
}

//~ smooth disappearing trnaition
//~ loading icon

export default LoadingComp
