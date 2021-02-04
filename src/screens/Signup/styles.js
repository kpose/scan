import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 43,
    padding: 30,
    color: COLORS.PRIMARY,
  },
  login: {
    color: COLORS.BLACK,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  h3: {
    fontSize: 17,
  },
  inputStyles: {
    marginTop: 20,
    alignItems: 'center',
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 10,
    alignSelf: 'flex-end',

    color: COLORS.PRIMARY,
  },
  input: {
    borderColor: COLORS.PRIMARY,
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
  },
  signup: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning: {
    marginTop: 15,
    marginBottom: 5,
    color: COLORS.WARNING,
    fontWeight: 'bold',
  },
});

export default styles;
