import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
  },
  docContainer: {
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.SILVER,
    height: 70,
    width: '90%',
    borderRadius: 10,
  },
  heading: {
    marginBottom: 10,
    marginTop: 20,
  },
});

export default styles;
