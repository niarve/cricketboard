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
    this.scores = [15, 16, 17, 18, 19, 20, 25]; //used to create the scoreboard
    // console.log('constructor');
    // if( typeof this.props.players == 'undefined' ) this.props.init();
  }

  displayHelper(score) {
    let displayFigure = ' '
    switch(score) {
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

  fetchUsers() {
    this.props.init();
  }

  _changeP1Score(value) {
    this.props.changeP1Score(value);
  }

  _changeP2Score(value) {
    this.props.changeP2Score(value);
  }

  _changeP1Name(name) {
    this.props.changeP1Name(name);
  }

  _changeP2Name(name) {
    this.props.changeP2Name(name);
  }

  _reset() {
    this.props.reset();
  }

  _undo() {
    if(typeof this.props.players.oldPlayers != "undefined") this.props.undo();
  }

  _changeModalVisibility() {
    this.props.changeModalVisibility();
  };

  componentWillMount() {
    // TODO: change this
    console.log('componentWillMount');
    if( typeof this.props.players.player1 == 'undefined' ) this.fetchUsers();
    this._reset = this._reset.bind(this);
    this._undo = this._undo.bind(this);
    this._changeP1Name = this._changeP1Name.bind(this);
    this._changeP2Name = this._changeP2Name.bind(this);
    this._changeP1Score = this._changeP1Score.bind(this);
    this._changeP2Score = this._changeP2Score.bind(this);
  }

  render() {
    // TODO: remove this
    console.log('nate', this.props);
    const { player1, player2 } = this.props.players;
    return (
      <View style={styles.container}>
        <Icon.Button name="ios-settings" backgroundColor="#3B653D" onPress={() => this.setState({showModal: !this.state.showModal})}/>

        <Text style={styles.title}>
          KLENKE
        </Text>

        <View style={styles.row}>
          <TextInput style={styles.names}
          onChangeText={this._changeP1Name}
          value={player1.name}
          />
          <TextInput style={styles.names}
          onChangeText={this._changeP2Name}
          value={player2.name}
          />
        </View>

        { //loops through values 15-20 and 25 to create scoreboard
          this.scores.map((value) => {
            return (
              <View key={value} style={styles.row}>
                <Button style={styles.circle} onPress={() => {this._changeP1Score(value)}}>
                  <Text style={styles.text}>{}</Text>
                </Button>
                <Text style={styles.number}>{value == '25' ? 'B' : value}</Text>
                <Button style={styles.circle} onPress={() => {this.changeP2Score(value)}}>
                  <Text style={styles.text}>{this.displayHelper(player2.s20)}</Text>
                </Button>
              </View>
            );
          })
        }

        <View style={styles.row}>
          <Button style={styles.circle} onPress={this._undo}>
            <Text style={styles.reset}>Undo</Text>
          </Button>
          <Button style={styles.circle} onPress={this._reset}>
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
