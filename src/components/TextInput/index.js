import React from 'react';
import {View, Text, TextInput, ViewStyle} from 'react-native';
import styles from './styles';
import {COLORS} from '../../utils';

const Input = (props) => {
  return (
    <View>
      <TextInput
        style={[styles.input, props.style]}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        value={props.value}
        placeholderTextColor={COLORS.SILVER}
        returnKeyType="next"
        secureTextEntry={props.secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;
