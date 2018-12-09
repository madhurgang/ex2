import React from 'react'
import { View, Text, Button } from 'react-native'
import { myStyle } from './Styles';
import { TextInput } from 'react-native-gesture-handler';

export default class Main extends React.Component {

  state = {
    textValue: '',
    pressed: false
  }

  handleChange = (val) => {
    this.setState({
      textValue: val
    })
  }

  handleSubmit = () => {
    this.setState({
      pressed: true
    })
  }

  render() {
    return (
      <View style={myStyle.Main}>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(v) => this.handleChange(v)}
          value={this.state.textValue}
          onSubmitEditing={() => this.handleSubmit()}
        />
        {this.state.pressed ? <Text>{this.state.textValue}</Text> : null}
        <Button onPress={() => this.handleSubmit()} title='Ho Gaya' />
      </View>
    )
  }
}