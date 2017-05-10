import { StyleSheet } from 'react-native';

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

export default styles
