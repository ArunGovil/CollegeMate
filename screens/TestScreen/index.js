import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TestScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.head}>TestScreen</Text>
      <View style={styles.navbuttons}>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttontext}>Login Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttontext}>Signup Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttontext}>Home Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.buttontext}>Profile Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('ChatList')}>
          <Text style={styles.buttontext}>Chat List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.buttontext}>Chat Screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    padding: 5,
    fontSize: 24,
    fontWeight: 'bold',
  },
  navbuttons: {
    flexDirection: 'column',
    alignContent: 'space-around',
  },
  buttonstyle: {
    margin: 10,
    backgroundColor: '#ED335F',
    padding: 20,
    borderRadius: 20,
  },
  buttontext: {
    color: 'white',
  },
});

export default TestScreen;
