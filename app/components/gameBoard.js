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
  }

  displayHelper(score) {
    let displayFigure = ' '
    switch(score%4){
      case 0:
        displayFigure = ' '
        break;
      case 1:
        displayFigure = '/'
        break;
      case 2:
        displayFigure = 'X'
        break;
      case 3:
        displayFigure = 'O'
        break;
    }
    return displayFigure;
  }

  changeP1Score(value) {
    this.props.changeP1Score(value);
  }

  changeP2Score(value) {
    this.props.changeP2Score(value);
  }

  changeP1Name(value) {
    this.props.changeP1Name(value);
  }

  changeP2Name(value) {
    this.props.changeP2Name(value);
  }

  render() {
    const { player1, player2 } = this.props.players;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput style={styles.names}
          onChangeText={(player1) => this.changeP1Name({player1})}
          value={player1.name}
          />
          <TextInput style={styles.names}
          onChangeText={(player2) => this.changeP2Name({player2})}
          value={player2.name}
          />
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(20)}>
            <Text style={styles.text}>{this.displayHelper(player1.s20)}</Text>
          </Button>
          <Text style={styles.number}>20</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(20)}>
            <Text style={styles.text}>{this.displayHelper(player2.s20)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(19)}>
            <Text style={styles.text}>{this.displayHelper(player1.s19)}</Text>
          </Button>
          <Text style={styles.number}>19</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(19)}>
            <Text style={styles.text}>{this.displayHelper(player2.s19)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(18)}>
            <Text style={styles.text}>{this.displayHelper(player1.s18)}</Text>
          </Button>
          <Text style={styles.number}>18</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(18)}>
            <Text style={styles.text}>{this.displayHelper(player2.s18)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(17)}>
            <Text style={styles.text}>{this.displayHelper(player1.s17)}</Text>
          </Button>
          <Text style={styles.number}>17</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(17)}>
            <Text style={styles.text}>{this.displayHelper(player2.s17)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(16)}>
            <Text style={styles.text}>{this.displayHelper(player1.s16)}</Text>
          </Button>
          <Text style={styles.number}>16</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(16)}>
            <Text style={styles.text}>{this.displayHelper(player2.s16)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(15)}>
            <Text style={styles.text}>{this.displayHelper(player1.s15)}</Text>
          </Button>
          <Text style={styles.number}>15</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(15)}>
            <Text style={styles.text}>{this.displayHelper(player2.s15)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(50)}>
            <Text style={styles.text}>{this.displayHelper(player1.s50)}</Text>
          </Button>
          <Text style={styles.number}>B</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(50)}>
            <Text style={styles.text}>{this.displayHelper(player2.s50)}</Text>
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
  return state
}, mapDispatchToProps)(GameBoard);
