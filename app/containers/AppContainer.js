import React, {Component} from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import GameBoard from '../components/gameBoard';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          KLENKE
        </Text>
        <GameBoard/>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3B653D'
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Bradley Hand',
    margin: 30
  }
});

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
