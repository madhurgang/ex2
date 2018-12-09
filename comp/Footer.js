import React from 'react'
import { View, Text } from 'react-native'

export default class Footer extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello I am Footer and my title is {this.props.myTitle}</Text>
      </View>
    )
  }
}