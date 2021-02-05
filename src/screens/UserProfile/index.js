import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, LargeButton} from '../../components';
import styles from './styles';

const UserProfile = () => {
  const [user, setUser] = useState('N/A N/A');
  const [password, Password] = useState('lllllll');
  return (
    <View style={styles.container}>
      <Input value={user} />
      <Input value={password} secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <LargeButton title="Change Password" />
      </View>
    </View>
  );
};

export default UserProfile;
