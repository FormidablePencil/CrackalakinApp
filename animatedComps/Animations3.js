import React, { useRef } from 'react'
import { View, Text, Button } from 'react-native'
import Animated from 'react-native-reanimated'
import Svg, { Rect } from 'react-native-svg'

const Animations3 = () => {
   const AnimatedRect = Animated.createAnimatedComponent(Rect)
   const animValue = useRef(new Animated.Value(0)).current

return (
   <View>
      <Svg width="300" height="200">
         <AnimatedRect
            y="10"
            x='21'
            width="90"
            height="60"
            fill="pink"
         />
      </Svg>
      <Text></Text>
      <Button title="translateRectX" />
   </View>
)
}

export default Animations3
