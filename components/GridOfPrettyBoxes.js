import React, { useState, useEffect, useRef } from 'react'
import { View, LayoutAnimation } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { matchingGameAction } from '../actionsTypes/actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import { BoxShadowWorkAround, HorizontalAlign, prettyLinearGradient, styles, StandardText } from '../styles/stylesMatchingGame';
import { LinearGradient } from 'expo-linear-gradient'
// import { Text } from '../styles/TextStyles';
import { Dimensions } from 'react-native'
import { VerticallyAlign } from '../styles/stylesMatchingGame'
import * as Animatable from 'react-native-animatable';
import Animated, { Easing } from 'react-native-reanimated';
// import { ROUND_OVER } from '../actionsTypes/types';

const windowHeight = Dimensions.get('window').height;

const width = Math.round(Dimensions.get('window').width);
// const LinearGradientAnimatable = Animatable.createAnimatableComponent(LinearGradient);
// const TouchableWithoutFeedbackAnimatable = Animatable.createAnimatableComponent(TouchableWithoutFeedback);

export const GridOfPrettyBoxes = ({ pairOfNumbers }) => {
  const round = useSelector(state => state.round)
  const fadeOut = { from: { backgroundColor: 'orange', }, to: { backgroundColor: 'green' }, };
  const [animation, setAnimation] = useState(false)
  const zoomOut = { 0: { backgroundColor: 'yellow', scale: 1, opacity: .6 }, 0.5: { backgroundColor: 'red', scale: 0.3, opacity: .2 }, 1: { backgroundColor: 'blue', scale: 0, opacity: 0 }, };

  useEffect(() => {
    setAnimation(!animation)
  }, [round])

  return (
    <VerticallyAlign style={{ height: width * 1.3333, width: '100%', }}
    >
      <Animatable.View
        style={{
          height: '100%',
          width: '100%', zIndex: 10,
          transform: [{ scale: windowHeight < 650 ? .7 : 1 }]
        }}>
        <PrettyBoxesRow
          item={pairOfNumbers[0]} box={0}
          item1={pairOfNumbers[1]} box1={1}
          item2={pairOfNumbers[2]} box2={2}
        />
        <PrettyBoxesRow
          item={pairOfNumbers[3]} box={3}
          item1={pairOfNumbers[4]} box1={4}
          item2={pairOfNumbers[5]} box2={5}
        />
        <PrettyBoxesRow
          item={pairOfNumbers[6]} box={6}
          item1={pairOfNumbers[7]} box1={7}
          item2={pairOfNumbers[8]} box2={8}
        />
        <PrettyBoxesRow
          item={pairOfNumbers[9]} box={9}
          item1={pairOfNumbers[10]} box1={10}
          item2={pairOfNumbers[11]} box2={11}
        />
      </Animatable.View>
    </VerticallyAlign >
  )
}


export const PrettyBoxesRow = ({ item, item1, item2, box, box1, box2 }) => {

  return (
    <HorizontalAlign style={{ width: '100%', height: '25%' }}>
      <PrettyBox item={item} whatBox={box} />
      <PrettyBox item={item1} whatBox={box1} />
      <PrettyBox item={item2} whatBox={box2} />
    </HorizontalAlign >
  )
}



export const PrettyBox = ({ item, whatBox }, props) => { //show down here prettyBoxVisibility obj and matchingGameAction //~ the put to seperate file
  const prettyBoxProperties = useSelector(state => state.prettyBoxProperties)
  const tappedValue = useSelector(state => state.tappedValue)
  const pairOfNumbers = useSelector(state => state.pairOfNumbers)
  const dispatch = useDispatch()
  const cubesLeft = useSelector(state => state.cubesLeft)
  const [cubeVisible, setCubeVisible] = useState(true)
  const colors = [prettyLinearGradient[item]['linearGradient'], prettyLinearGradient[item]['linearGradient1'], prettyLinearGradient[item]['linearGradient2']]
  const playGame = useSelector(state => state.playGame)
  const [runSecondAnimation, setRunSecondAnimation] = useState(false)
  const [nextRound, setNextRound] = useState(false)
  const [lastCube, setLastCube] = useState(false)
  //Math.floor(Math.random() * 800
  const round = useSelector(state => state.round)
  const fadeInAndOut = { 0: { opacity: 1 }, .5: { opacity: .0 }, 1: { opacity: 1 } }
  const cubeOpacity = useRef(new Animated.Value(1)).current

  const fadeOut = { from: { opacity: 1, }, to: { opacity: .05 }, };
  const fadeIn = { from: { opacity: .3, }, to: { opacity: 1, }, };

  useEffect(() => {
    if (cubeVisible) executeCubeOpacityAnimation(0)
  }, [cubeVisible])

  useEffect(() => {
    if (!cubeVisible) executeCubeOpacityAnimation(1)
  }, [cubeVisible])

  const executeCubeOpacityAnimation = (toValue) => {
    setTimeout(() => {
      Animated.timing(
        cubeOpacity, {
        toValue,
        duration: 350,
        easing: toValue ? Easing.linear : Easing.back(),
      }
      ).start();
    }, toValue ? 0 : 300);
  }

  const handleOnPress = async () => {
    if (cubesLeft !== 2) {
      dispatch(matchingGameAction({ value: item, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers }))
    } else if (cubesLeft === 2) {
      if (lastCube === false) {
        setLastCube(true)
        setCubeVisible(false)
        dispatch(matchingGameAction({ value: item, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers }))
      } else {
        dispatch(matchingGameAction({ value: item, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers }))
        setLastCube(false)
      }
    }
  }

  useEffect(() => {
    if (prettyBoxProperties.filter(item => item.visible === false)[0] === undefined) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
      // await setCubeVisible(false)
      setCubeVisible(true)
    }
  }, [Object.entries(prettyBoxProperties)])

  useEffect(() => {
    setCubeVisible(true)
  }, [])

  useEffect(() => {
    if (!prettyBoxProperties[whatBox].visible) {
      setCubeVisible(false)
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    }
  }, [prettyBoxProperties[whatBox].visible])

  useEffect(() => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
  }, [nextRound])

  return (
    <View style={{ width: '33.33%', height: '100%' }}>
      <TouchableWithoutFeedback
        onPress={handleOnPress}>
        <BoxShadowWorkAround>
          <Animated.View
            transition="opacity"
            style={{ opacity: cubeOpacity, backgroundColor: 'teal', height: '100%', width: '100%', zIndex: 100, position: "absolute", borderRadius: 10, }} />
          <LinearGradient
            colors={colors}
            start={[.6, .2]}
            end={[.1, .7]}
            style={{ borderRadius: 10, height: '100%', width: '100%', zIndex: 1 }}
          >
          </LinearGradient>
        </BoxShadowWorkAround>
      </TouchableWithoutFeedback>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    prettyBoxProperties: state.prettyBoxProperties
  }
}

export default connect(mapStateToProps, { matchingGameAction })(GridOfPrettyBoxes)