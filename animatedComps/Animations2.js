import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Animated, Button } from 'react-native'
import Svg, { Circle, Rect } from 'react-native-svg';

const Animations2 = () => {
   // const positionOfElement = useAnimation(1000)
   // const AnimatedSvg = Animated.createAnimatedComponent(Svg) // how you'd mak any element into an Animated one. Awesome!
   const animation = useRef(new Animated.Value(0)).current;
   // const [animation] = useState(new Animated.Value(0))

   const xIncrement = () => { //these are what's importat 
      Animated.spring(animation, {
         toValue: 100,
         duration: 2000
      }).start();
   };
   const xDecrement = () => {
      Animated.spring(animation, {
         toValue: 0,
         duration: 2000
      }).start();
   };

   useEffect(() => {
   }, [animation])

   const positionOfElement = 1000
   return (
      <Animated.View style={{
         flex: 1,
         backgroundColor: 'gray',
         justifyContent: 'center',
         alignItems: 'center'
      }}>
         {/* <Svg viewBox="0 0 100 100">
            <Circle cx="10" cy="10" r='5' />
            <Circle cx={positionOfElement * 100} cy="50" r='10' />
         </Svg> */}
         {/* <AnimatedSvg
            style={{ top: animation }}
             height="50" width="50" viewBox="0 0 100 100">
               <Rect
                  x="20"
                  y='10' //~ lets try to move this downward
                  width="70"
                  height="70"
                  stroke="yellow"
                  strokeWidth="2"
                  fill="cyan"
               />
            </AnimatedSvg> */}
         <Button onPress={xIncrement} title='xIncrement' />
         <Button onPress={xDecrement} title='xDecrement' />
      </Animated.View>
   )
}

export default Animations2
