import { StyleSheet } from 'react-native';

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
    justifyContent: 'space-around',
  },
  names: {
    flex: .2,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    width: 20,
    height: 50,
    textAlign: 'center',
  },
  number: {
    fontWeight: 'bold',
    color: '#fff',
    width: 100,
    height: 75,
    textAlign: 'center',
    fontSize: 50,
    marginTop: -5,
  },
  score: {
    fontSize: 30,
    color: '#fff',
    alignSelf: 'center',
  },
  scoreText: {
    fontSize: 30,
    color: '#fff',
  },
  circle: {
    borderWidth: 0,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#3B653D',
    fontSize: 50,
  },
});

export default styles
