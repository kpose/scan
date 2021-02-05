import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {COLORS} from '../../utils';
import {HorrizontalCard} from '../../components';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Details = ({route, navigation}) => {
  const {title, image} = route.params;
  return (
    <View style={styles.container}>
      <HorrizontalCard image={image} title={`Add a new ${title}`} />
      <View style={styles.heading}>
        <Text style={{fontSize: 20, color: COLORS.PRIMARY}}> My {title}</Text>
      </View>
      <View style={styles.docContainer}>
        <Image source={image} style={{height: 50, width: 50, marginLeft: 10}} />
        <Text style={{marginLeft: 50}}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 120,
            justifyContent: 'space-between',
          }}>
          <FontAwesome
            name="edit"
            color="black"
            size={25}
            style={{marginRight: 8}}
          />
          <FontAwesome name="trash" color="red" size={25} />
        </View>
      </View>

      <View style={styles.docContainer}>
        <Image source={image} style={{height: 50, width: 50, marginLeft: 10}} />
        <Text style={{marginLeft: 50}}>{title}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 120,
            justifyContent: 'space-between',
          }}>
          <FontAwesome
            name="edit"
            color="black"
            size={25}
            style={{marginRight: 8}}
          />
          <FontAwesome name="trash" color="red" size={25} />
        </View>
      </View>
    </View>
  );
};

export default Details;
