import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import ScoreBoardRow from './scoreboardrow';

class Numbers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScoreBoardRow value="20"/>
        <ScoreBoardRow value="19"/>
        <ScoreBoardRow value="18"/>
        <ScoreBoardRow value="17"/>
        <ScoreBoardRow value="16"/>
        <ScoreBoardRow value="15"/>
        <ScoreBoardRow value="B"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Numbers
