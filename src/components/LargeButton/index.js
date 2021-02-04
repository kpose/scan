import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const LargeButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, props.style]}
        onPress={props.onPress}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LargeButton;
