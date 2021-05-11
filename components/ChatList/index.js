import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ChatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photocontainer}>
        <Text style={styles.photo}>P</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.name}>Adam</Text>
        <Text style={styles.message}>Hey how is it going so far</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E5E6',
    position: 'absolute',
    margin: 10,
    width: '95%',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  photocontainer: {
    backgroundColor: '#ED335F',
    width: 60,
    height: 60,
    padding: 5,
    borderRadius: 360,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  textcontainer: {
    justifyContent: 'center',
    padding: 10,
    width: '80%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#00154F',
  },
  message: {
    fontSize: 16,
    color: 'grey',
  },
});

export default ChatList;
