import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button'

class Numbers extends Component {
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
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(20)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>20</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(20)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(19)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>19</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(19)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(18)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>18</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(18)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(17)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>17</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(17)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(16)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>16</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(16)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(15)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>15</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(15)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(50)}>
            <Text style={styles.text}>{this.props.p1score}</Text>
          </Button>
          <Text style={styles.number}>B</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(50)}>
            <Text style={styles.text}>{this.props.p2score}</Text>
          </Button>
        </View>
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
  row: {
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    p1score: state.p1score,
    p2score: state.p2score
  }
}, mapDispatchToProps)(Numbers);
