import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {},
  button: {
    flexDirection: 'row',
    backgroundColor: '#edf2f2',
    padding: 10,
    height: 60,
    width: 330,
    borderRadius: 10,
    marginTop: 30,

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
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginLeft: 5,
    alignSelf: 'center',
  },
});

export default styles;
