import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Settings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <View style={styles.textContainer}>
          <FontAwesome name="user" color="blue" size={28} />
          <Text style={{fontSize: 20, marginLeft: 20}}> User Profile </Text>
        </View>
      </TouchableOpacity>
      <View style={{width: '90%', height: 1, backgroundColor: 'black'}}></View>

      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <View style={styles.textContainer}>
          <FontAwesome name="info" color="blue" size={28} />
          <Text style={{fontSize: 20, marginLeft: 20}}> Help </Text>
        </View>
      </TouchableOpacity>
      <View style={{width: '90%', height: 1, backgroundColor: 'black'}}></View>

      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <View style={styles.textContainer}>
          <FontAwesome name="angle-double-left" color="red" size={28} />
          <Text style={{fontSize: 20, color: 'red', marginLeft: 20}}>
            {' '}
            Logout{' '}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
