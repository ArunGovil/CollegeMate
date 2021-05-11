import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Users from '../../components/UserList';
// import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head}>
          <Text style={styles.headcontent}>Home</Text>
        </View>
        <View style={styles.logout}>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.morecontent}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.userlist}>
        <Users />
      </View>
    </View>
  );
};

export default HomeScreen;
