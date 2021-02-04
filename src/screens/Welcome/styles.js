import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 300,
  },
  title: {
    color: COLORS.PRIMARY,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
  button: {
    backgroundColor: COLORS.SILVER,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default styles;
