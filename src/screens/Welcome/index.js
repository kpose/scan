import React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {LargeButton} from '../../components';

const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/createAccount.png')}
      />
      <Text style={styles.title}>
        Scan and Auto Fill Your Docments With No Hasle
      </Text>
      <LargeButton title={'Create Account'} />
      <View style={styles.loginContainer}>
        <LargeButton
          title={'Create Account'}
          style={{backgroundColor: '#cdd3d4'}}
        />
      </View>

      {/* <LargeButton title={'Continue'} style={{backgroundColor: '#cdd3d4'}} /> */}

      <TouchableOpacity style={styles.button} onPress={console.log('pressed')}>
        <Text style={styles.buttonText}>Continue without Creating Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Welcome;
