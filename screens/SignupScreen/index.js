import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [Name, setName] = useState('');
  const [Mail, setMail] = useState('');
  const [Gender, setGender] = useState('');
  const [Dept, setDept] = useState('');
  const [DOB, setDOB] = useState('');
  const [Password, setPassword] = useState('');

  const signup = () => {
    const name = Name;
    const mail = Mail;
    const gender = Gender;
    const dept = Dept;
    const dob = DOB;
    const password = Password;

    auth()
      .createUserWithEmailAndPassword(mail, password)
      .then(() => {
        navigation.navigate('Home');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Singup</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.nameinput}
          placeholder=" Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.nameinput}
          placeholder=" Mail"
          onChangeText={(text) => setMail(text)}
        />
        <DropDownPicker
          style={styles.nameinput}
          items={[
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'},
            {label: 'Transgender', value: 'trans'},
          ]}
          placeholder={'Gender'}
          containerStyle={{height: 75}}
          itemStyle={{backgroundColor: '#F5F5F5'}}
          dropDownStyle={{backgroundColor: '#F5F5F5', borderWidth: 0.5}}
          onChangeItem={(item) => setGender(item.value)}
        />

        <DropDownPicker
          style={styles.nameinput}
          items={[
            {label: 'Computer Science', value: 'cs'},
            {label: 'Zoology', value: 'zoo'},
            {label: 'Botany', value: 'bot'},
            {label: 'Geology', value: 'geo'},
          ]}
          placeholder={'Department'}
          containerStyle={{height: 75}}
          itemStyle={{backgroundColor: '#F5F5F5'}}
          dropDownStyle={{backgroundColor: '#F5F5F5', borderWidth: 0.5}}
          placeholderStyle={{fontFamily: 'TitilliumWeb-Regular'}}
          labelStyle={{fontFamily: 'TitilliumWeb-Regular'}}
          onChangeItem={(item) => setDept(item.value)}
        />
        <TextInput
          style={styles.nameinput}
          placeholder=" Date of Birth"
          onChangeText={(text) => setDOB(text)}
        />
        <TextInput
          style={styles.nameinput}
          placeholder=" Password"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.singnupbutton} onPress={signup}>
        <Text style={styles.buttontext}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logintext}
        onPress={() => navigation.navigate('Login')}>
        <Text>Already a User? Click here to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
