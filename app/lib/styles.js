import { StyleSheet } from 'react-native';
import { em } from './em';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  names: {
    flex: .2,
    fontSize: em(1.5),
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    opacity: .7,
    width: em(1.5),
    height: em(2.5),
    textAlign: 'center',
  },
  number: {
    fontWeight: 'bold',
    color: '#fff',
    width: em(4),
    height: em(3),
    textAlign: 'center',
    fontSize: em(2.5),
  },
  score: {
    fontSize: em(2),
    color: '#fff',
    alignSelf: 'center',
  },
  scoreText: {
    fontStyle: 'italic',
    fontSize: em(2),
    color: '#fff',
  },
  circle: {
    borderWidth: 0,
    width: em(4),
    marginHorizontal: em(2),
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    fontSize: em(2.5),
  },
  reset: {
    fontSize: em(1.5),
    color: '#fff',
    opacity: .7,
  },
  modal: {
    zIndex: 1000,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Bradley Hand',
    margin: 30
  },
});

export default styles
