import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {LargeButton, Spinner} from '../../components';

const Welcome = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  onClick = () => {
    setLoading(true);
    setTimeout(() => {
      handleNavigation();
    }, 2000);
  };

  handleNavigation = () => {
    setLoading(false);
    navigation.navigate('FirstTimeSetup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/createAccount.png')}
      />
      <Text style={styles.title}>
        Scan and Auto Fill Your Docments With No Hasle
      </Text>
      <LargeButton
        title={'Create Account'}
        onPress={() => navigation.navigate('Signup')}
      />
      <View style={styles.loginContainer}>
        <LargeButton
          title={'Login'}
          onPress={() => navigation.navigate('Signin')}
          style={{backgroundColor: '#cdd3d4'}}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onClick()}>
        <Text style={styles.buttonText}>Continue without Creating Account</Text>
      </TouchableOpacity>
      {loading && <Spinner />}
    </SafeAreaView>
  );
};

export default Welcome;
