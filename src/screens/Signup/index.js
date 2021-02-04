import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import styles from './styles';
import {COLORS} from '../../utils';
import {LargeButton, Input, Spinner} from '../../components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.heading}>Snapfill</Text>
          <Text style={styles.login}>New Account</Text>
          <Text style={styles.h3}>Start by entering your email</Text>
          <Text style={styles.h3}>address below</Text>
        </View>

        <View style={styles.inputStyles}>
          <Input
            placeholder=" Name"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Input
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableWithoutFeedback onPress={() => console.warn('forgot')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.button}>
          <LargeButton title="Login" onPress={console.log('login')} />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.signup}>
        <Text style={{color: COLORS.BLACK}}> Don't have an account?, </Text>
        <TouchableWithoutFeedback onPress={console.log('signup')}>
          <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
            Sign Up{' '}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Signup;