import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: '#edf2f2',
    padding: 10,
    height: 150,
    width: 150,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  title: {
    color: COLORS.BLACK,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignSelf: 'center',
  },
});

export default styles;
