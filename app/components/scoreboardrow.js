import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button'


class ScoreBoardRow extends Component {
  constructor(props) {
    super(props);
  }

  changeP1Score(value) {
    this.props.changeP1Score(value);
  }

  changeP2Score(value) {
    this.props.changeP2Score(value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.circle} onPress={() => this.changeP1Score(this.props.value)}>
          <Text style={styles.text}>{this.props.p1score}</Text>
        </Button>
        <Text style={styles.number}>{this.props.value}</Text>
        <Button style={styles.circle} onPress={() => this.changeP2Score(this.props.value)}>
          <Text style={styles.text}>{this.props.p2score}</Text>
        </Button>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  number: {
    fontWeight: 'bold',
    color: '#fff',
    width: 100,
    height: 75,
    textAlign: 'center',
    fontSize: 55,
    marginTop: -10,
  },
  circle: {
    borderWidth: 0,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    fontSize: 55,
  },
});

export default connect((state) => {
  return {
    p1score: state.p1score,
    p2score: state.p2score
  }
}, mapDispatchToProps)(ScoreBoardRow);
