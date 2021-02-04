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

const Signup = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
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
          <LargeButton title="Sign up" onPress={() => onClick()} />
        </View>
      </KeyboardAvoidingView>

      <View style={styles.signup}>
        <Text style={{color: COLORS.BLACK}}> Already have an account?, </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: COLORS.WARNING, fontWeight: 'bold'}}>
            Login{' '}
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {loading && <Spinner />}
    </View>
  );
};

export default Signup;
