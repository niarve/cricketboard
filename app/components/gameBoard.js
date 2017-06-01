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
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modalbox';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    }
  }

  displayHelper(score) {
    let displayFigure = ' '
    switch(score){
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
      default:
        displayFigure = 'O'
        break;
    }
    return displayFigure;
  }

  changeP1Score(value, score, opponent) {
    updateScore =  score >= 3 && opponent < 3 ? true : false; //tells reducer to update score if its they're 4th hit
    this.props.changeP1Score(value, updateScore);
  }

  changeP2Score(value, score, opponent) {
    updateScore =  score >= 3 && opponent < 3 ? true : false; //tells reducer to update score if its they're 4th hit
    this.props.changeP2Score(value, updateScore);
  }

  changeP1Name(name) {
    this.props.changeP1Name(name);
  }

  changeP2Name(name) {
    this.props.changeP2Name(name);
  }

  reset(){
    this.props.reset();
  }

  _changeModalVisibility(){
    this.props.changeModalVisibility();
  };

  setModalVisible(visible) {
   this.props.changeModalVisibility();
 };

  undo(){
    if(typeof this.props.players.oldPlayers != "undefined") this.props.undo();
  }

  render() {
    const { player1, player2 } = this.props.players;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          KLENKE
        </Text>
        <Icon.Button name="ios-settings" backgroundColor="#3B653D" onPress={() => this.setState({showModal: !this.state.showModal})}/>
        <View style={styles.row}>
          <TextInput style={styles.names}
          onChangeText={(name) => this.changeP1Name({name})}
          value={player1.name}
          />
          <TextInput style={styles.names}
          onChangeText={(name) => this.changeP2Name({name})}
          value={player2.name}
          />
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(20, player1.s20, player2.s20)}>
            <Text style={styles.text}>{this.displayHelper(player1.s20)}</Text>
          </Button>
          <Text style={styles.number}>20</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(20, player2.s20, player1.s20)}>
            <Text style={styles.text}>{this.displayHelper(player2.s20)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(19, player1.s19, player2.s19)}>
            <Text style={styles.text}>{this.displayHelper(player1.s19)}</Text>
          </Button>
          <Text style={styles.number}>19</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(19, player2.s19, player1.s19)}>
            <Text style={styles.text}>{this.displayHelper(player2.s19)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(18, player1.s18, player2.s18)}>
            <Text style={styles.text}>{this.displayHelper(player1.s18)}</Text>
          </Button>
          <Text style={styles.number}>18</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(18, player2.s18, player1.s18)}>
            <Text style={styles.text}>{this.displayHelper(player2.s18)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(17, player1.s17, player2.s17)}>
            <Text style={styles.text}>{this.displayHelper(player1.s17)}</Text>
          </Button>
          <Text style={styles.number}>17</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(17, player2.s17, player1.s17)}>
            <Text style={styles.text}>{this.displayHelper(player2.s17)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(16, player1.s16, player2.s16)}>
            <Text style={styles.text}>{this.displayHelper(player1.s16)}</Text>
          </Button>
          <Text style={styles.number}>16</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(16, player2.s16, player1.s16)}>
            <Text style={styles.text}>{this.displayHelper(player2.s16)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(15, player1.s15, player2.s15)}>
            <Text style={styles.text}>{this.displayHelper(player1.s15)}</Text>
          </Button>
          <Text style={styles.number}>15</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(15, player2.s15, player1.s15)}>
            <Text style={styles.text}>{this.displayHelper(player2.s15)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.changeP1Score(25, player1.s25, player2.s25)}>
            <Text style={styles.text}>{this.displayHelper(player1.s25)}</Text>
          </Button>
          <Text style={styles.number}>B</Text>
          <Button style={styles.circle} onPress={() => this.changeP2Score(25, player2.s25, player1.s25)}>
            <Text style={styles.text}>{this.displayHelper(player2.s25)}</Text>
          </Button>
        </View>
        <View style={styles.row}>
          <View style={styles.circle}>
            <Text style={styles.score}>{player1.score == 0 ? '' : player1.score}</Text>
          </View>
          <Text style={styles.scoreText}>Score</Text>
          <View style={styles.circle}>
            <Text style={styles.score}>{player2.score == 0 ? '' : player2.score}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Button style={styles.circle} onPress={() => this.undo()}>
            <Text style={styles.reset}>Undo</Text>
          </Button>
          <Button style={styles.circle} onPress={() => this.reset()}>
            <Text style={styles.reset}>Reset</Text>
          </Button>
        </View>

        <Modal style={[styles.modal]} position={"center"} isOpen={this.state.showModal}>
          <Text style={styles.text}>Modal centered</Text>
          <Button onPress={() => this.setState({showModal: !this.state.showModal})} style={styles.btn}>Disable ({this.state.showModal ? "true" : "false"})</Button>
        </Modal>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    players: state.players,
    showModal: state.showModal
  }
}, mapDispatchToProps)(GameBoard);
