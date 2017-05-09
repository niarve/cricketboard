import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
var {width, height} = require('Dimensions').get('window');
import Numbers from './numbers';


class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.board}>
        {/* insert scroll view here
          * column of buttons */ }
        <Numbers/>
        {/* column of buttons
          * insert scroll view here */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: .8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
});

export default Board
