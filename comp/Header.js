import React from 'react'
import { View, Text } from 'react-native'

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello I am {this.props.myTitle}</Text>
      </View>
    )
  }
}