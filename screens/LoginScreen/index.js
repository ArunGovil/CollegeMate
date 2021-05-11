import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [Mail, setMail] = useState('');
  const [Password, setPassword] = useState('');

  const login = () => {
    const mail = Mail;
    const password = Password;

    auth()
      .signInWithEmailAndPassword(mail, password)
      .then(() => {
        navigation.navigate('Home');
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.emailinput}
          placeholder=" Email"
          onChangeText={(text) => setMail(text)}
        />
        <TextInput
          style={styles.passwordinput}
          placeholder=" Password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginbutton} onPress={login}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.singuptext}>New User? Click here to SignUp!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
