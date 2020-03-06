
import React from 'react'
import { View } from 'react-native'
import { HorizontalAlign, prettyLinearGradient, styles, BoxShadowWorkAround } from '../styles/stylesMatchingGame'
import { TextStandard } from '../styles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'

export const GridOfPrettyBoxes = ({ matchingGameAction, prettyBoxProperties, matchingGame }) =>
  <View>
    <PrettyBoxesRow
      matchingGameAction={matchingGameAction}
      prettyBoxProperties={prettyBoxProperties}
      item={matchingGame[0]} box={0}
      item1={matchingGame[1]} box1={1}
      item2={matchingGame[2]} box2={2}
    />
    <PrettyBoxesRow
      matchingGameAction={matchingGameAction}
      prettyBoxProperties={prettyBoxProperties}
      item={matchingGame[3]} box={3}
      item1={matchingGame[4]} box1={4}
      item2={matchingGame[5]} box2={5}
    />
    <PrettyBoxesRow
      matchingGameAction={matchingGameAction}
      prettyBoxProperties={prettyBoxProperties}
      item={matchingGame[6]} box={6}
      item1={matchingGame[7]} box1={7}
      item2={matchingGame[8]} box2={8}
    />
    <PrettyBoxesRow
      matchingGameAction={matchingGameAction}
      prettyBoxProperties={prettyBoxProperties}
      item={matchingGame[9]} box={9}
      item1={matchingGame[10]} box1={10}
      item2={matchingGame[11]} box2={11}
    />
  </View>


export const PrettyBoxesRow = ({ item, item1, item2, box, box1, box2, prettyBoxProperties, matchingGameAction }) => {
  return (
    <HorizontalAlign style={{right: -5}}>
      <PrettyBoxes item={item} whatBox={box} prettyBoxProperties={prettyBoxProperties} matchingGameAction={matchingGameAction} />
      <PrettyBoxes item={item1} whatBox={box1} prettyBoxProperties={prettyBoxProperties} matchingGameAction={matchingGameAction} />
      <PrettyBoxes item={item2} whatBox={box2} prettyBoxProperties={prettyBoxProperties} matchingGameAction={matchingGameAction} />
    </HorizontalAlign >
  )
}

export function PrettyBoxes(props) { //show down here prettyBoxVisibility obj and matchingGameAction //~ the put to seperate file
  const item = props.item
  const whatBox = props.whatBox
  const prettyBoxProperties = props.prettyBoxProperties
  const matchingGameAction = props.matchingGameAction

  function handleOnPress() {
    matchingGameAction(item, whatBox)
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

export default GridOfPrettyBoxes