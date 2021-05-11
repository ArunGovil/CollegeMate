import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.head}>Profile</Text>
      </View>
      <View style={styles.profilecontainer}>
        <View style={styles.photocontainer}>
          <Text style={styles.photo}>P</Text>
        </View>
        <View style={styles.detailscontainer}>
          <Text style={styles.name}>Adam</Text>
          <Text style={styles.batch}>Computer Science</Text>
        </View>
      </View>
      <View style={styles.rem}>
        <View style={styles.edit}>
          <TouchableOpacity>
            <Text style={styles.edittext}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
