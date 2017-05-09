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
import Names from '../components/names';
import Board from '../components/board';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  incrementCount() {
    this.props.incrementCount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.margin}>
          I am App container! count: {this.props.count}
        </Text>
        <TouchableHighlight onPress={() => {this.incrementCount() }}>
          <Text>
            Increment
          </Text>
        </TouchableHighlight>
        <Names/>
        <Board/>
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
  margin: {
    marginTop: 20
  }
});

export default connect((state) => {
  return {
    count: state.count
  }
}, mapDispatchToProps)(AppContainer);
