import React, {Component} from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import GameBoard from '../components/gameBoard';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
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
});

export default connect((state) => { return {
  players: state.players,
  showModal: state.showModal
} }, mapDispatchToProps)(AppContainer);
