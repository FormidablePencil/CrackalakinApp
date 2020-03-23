import React from 'react'
import { View } from 'react-native'
import { HorizontalAlign, prettyLinearGradient, styles, BoxShadowWorkAround } from '../styles/stylesMatchingGame'
import { TextStandard } from '../styles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { matchingGameAction } from '../actionsTypes/actions'
import { connect, useSelector, useDispatch } from 'react-redux';

export const GridOfPrettyBoxes = ({ pairOfNumbers }) =>
  <View>
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
  </View>


export const PrettyBoxesRow = ({ item, item1, item2, box, box1, box2 }) => {
  return (
    <HorizontalAlign style={{ right: -5 }}>
      <PrettyBoxes item={item} whatBox={box} />
      <PrettyBoxes item={item1} whatBox={box1} />
      <PrettyBoxes item={item2} whatBox={box2} />
    </HorizontalAlign >
  )
}

//? this doesn't seem to work
export const PrettyBoxes = ({item, whatBox}, props) => { //show down here prettyBoxVisibility obj and matchingGameAction //~ the put to seperate file
  const prettyBoxProperties = useSelector(state => state.prettyBoxProperties)
  const tappedValue = useSelector(state => state.tappedValue)
  const pairOfNumbers = useSelector(state => state.pairOfNumbers)
  const dispatch = useDispatch()
  
  function handleOnPress() {
    dispatch(matchingGameAction({value: item, whatBox, prettyBoxProperties, tappedValue, pairOfNumbers}))
  }

  return (
    <View>
      {prettyBoxProperties[whatBox].visible ?
        <View>
          <BoxShadowWorkAround>
            <TouchableOpacity style={{}} onPress={() => handleOnPress()}>
              <LinearGradient
                colors={[prettyLinearGradient[item]['linearGradient'], prettyLinearGradient[item]['linearGradient1'], prettyLinearGradient[item]['linearGradient2']]}
                style={styles.prettyBox}
                start={[.6, .2]}
                end={[.1, .7]} >
                <TextStandard>
                  {props.children}
                </TextStandard>
              </LinearGradient>
            </TouchableOpacity>
          </BoxShadowWorkAround>
        </View>
        : <View style={{ ...styles.prettyBox, ...styles.littleMargin }}></View>
      }
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    prettyBoxProperties: state.prettyBoxProperties
  }
}

export default connect(mapStateToProps, {matchingGameAction})(GridOfPrettyBoxes)