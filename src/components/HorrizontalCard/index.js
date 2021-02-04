import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const HorrizontalCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HorrizontalCard;
