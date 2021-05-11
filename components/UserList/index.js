import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const UserList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photocontainer}>
        <Text style={styles.photo}>P</Text>
      </View>
      <View style={styles.namecontainer}>
        <Text style={styles.name}>Eve</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: 'absolute',
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  photocontainer: {
    backgroundColor: '#E3E5E6',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 150,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    fontSize: 40,
    color: '#00154F',
  },
  namecontainer: {
    backgroundColor: '#ED335F',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  name: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default UserList;
