import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import Chats from '../../components/ChatList';

const ChatList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.head}>
          <Text style={styles.headcontent}>Chats</Text>
        </View>
        <View style={styles.more}>
          <Text style={styles.morecontent}>!</Text>
        </View>
      </View>
      <View style={styles.chatcontainer}>
        <Chats />
      </View>
    </View>
  );
};

export default ChatList;
