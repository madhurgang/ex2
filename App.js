import React from 'react'
import { Text, View, Button } from 'react-native'
import Header from './comp/Header'
import Main from './comp/Main'
import Footer from './comp/Footer'
import { myStyle } from './comp/Styles';

export default class App extends React.Component {

  state = {
    headerTitle: 'my new header',
    headerMain: 'my new main',
    headerFooter: 'my new footer',
  }

  render() {
    return (
      <View style={myStyle.myContainer}>
        <Header myTitle={this.state.headerTitle} />
        <Main />
        <Footer myTitle={this.state.headerFooter} />
      </View>
    );
  }

}
