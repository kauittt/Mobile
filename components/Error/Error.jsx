import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

const Error = () => {
  const handleHide = () => {
    Alert.alert('Test function', 'Lorem ipsum dolor sit amet.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.icon} onPress={handleHide}>
          <Text>
            <Icon name="times" size={30} />
          </Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Dành Cho Tài Khoản VIP</Text>
        <Text style={styles.desc}>
          Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản VIP để
          nghe bài hát này.
        </Text>
      </View>
    </View>
  );
};

export default Error;
