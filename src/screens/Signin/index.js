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

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.heading}>Snapfill</Text>
          <Text style={styles.login}>Log In</Text>
          <Text style={styles.h3}>Enter your login details to</Text>
          <Text style={styles.h3}>access your account</Text>
        </View>

        <View style={styles.inputStyles}>
          <Input
            placeholder=" Email"
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

          <TouchableWithoutFeedback onPress={() => console.warn('forgot')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.button}>
          <LargeButton title="Login" onPress={() => onClick()} />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.signup}>
        <Text style={{color: COLORS.BLACK}}> Don't have an account?, </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
            Sign Up{' '}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {loading && <Spinner />}
    </View>
  );
};

export default Signin;
