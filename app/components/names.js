import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class Names extends Component {
  constructor(props) {
      super(props);
      this.state = {
        player1: 'Player 1',
        player2: 'Player 2',
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.names}
        onChangeText={(player1) => this.setState({player1})}
        value={this.state.player1}
        />
        <TextInput style={styles.names}
        onChangeText={(player2) => this.setState({player2})}
        value={this.state.player2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  names: {
    flex: .2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    width: 50,
    height: 50,
    textAlign: 'center',
  },
});

export default Names
