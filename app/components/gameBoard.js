import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from 'apsl-react-native-button';
import styles from '../lib/styles';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 'Player 1',
      player2: 'Player 2',
    };
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
        <TextInput style={styles.names}
        onChangeText={(player1) => this.setState({player1})}
        value={this.state.player1}
        />
        <TextInput style={styles.names}
        onChangeText={(player2) => this.setState({player2})}
        value={this.state.player2}
        />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    p1score: state.p1score,
    p2score: state.p2score
  }
}, mapDispatchToProps)(GameBoard);
