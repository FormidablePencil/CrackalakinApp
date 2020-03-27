import React from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { matchingGameAction } from '../actionsTypes/actions'
import { connect, useSelector, useDispatch } from 'react-redux';
import { BoxShadowWorkAround, HorizontalAlign, prettyLinearGradient, styles, StandardText } from '../styles/stylesMatchingGame';
import { LinearGradient } from 'expo-linear-gradient'
import { Text } from '../styles/TextStyles';
import { Dimensions } from 'react-native'
import { VerticallyAlign } from '../styles/stylesMatchingGame'
const width = Math.round(Dimensions.get('window').width);

export const GridOfPrettyBoxes = ({ pairOfNumbers }) =>
  <VerticallyAlign style={{ height: width * 1.3333, width: '100%' }}>
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
  </VerticallyAlign>


export const PrettyBoxesRow = ({ item, item1, item2, box, box1, box2 }) => {
  return (
    <HorizontalAlign style={{ width: '100%', height: '25%'}}>
      <PrettyBoxes item={item} whatBox={box} />
      <PrettyBoxes item={item1} whatBox={box1} />
      <PrettyBoxes item={item2} whatBox={box2} />
    </HorizontalAlign >
  )
}

export const PrettyBoxes = ({ item, whatBox }, props) => { //show down here prettyBoxVisibility obj and matchingGameAction //~ the put to seperate file
  const prettyBoxProperties = useSelector(state => state.prettyBoxProperties)
  const tappedValue = useSelector(state => state.tappedValue)
  const pairOfNumbers = useSelector(state => state.pairOfNumbers)
  const dispatch = useDispatch()

  function handleOnPress() {
    dispatch(matchingGameAction({ value: item, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers }))
  }
  // console.log(prettyLinearGradient[item]['linearGradient'])
  return (
    <View style={{ width: '33.33%', height: '100%' }}>
      {prettyBoxProperties[whatBox].visible ?
        <BoxShadowWorkAround>
        <TouchableOpacity style={{ height: '100%' }} onPress={() => handleOnPress()}>
          <LinearGradient
            style={{ flex: 1, backgroundColor: 'green', borderRadius: 10 }}
            colors={[prettyLinearGradient[item]['linearGradient'], prettyLinearGradient[item]['linearGradient1'], prettyLinearGradient[item]['linearGradient2']]}
            start={[.6, .2]}
            end={[.1, .7]} >
            <StandardText>
              {props.children}
            </StandardText>
          </LinearGradient>
        </TouchableOpacity>
         </BoxShadowWorkAround>
        : <View style={{ ...styles.prettyBox }}></View>
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    prettyBoxProperties: state.prettyBoxProperties
  }
}

export default connect(mapStateToProps, { matchingGameAction })(GridOfPrettyBoxes)