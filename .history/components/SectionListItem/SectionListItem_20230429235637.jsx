import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const SectionListItem = () => {
  {
    console.log('work');
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Đường Về Thật Chill</Text>
        <Text style={styles.desc}>
          <Text style={styles.alias}>Phương Ly, </Text>
          <Text style={styles.alias}>Hoàng Dũng, </Text>
          <Text style={styles.alias}>GREY D, </Text>
          <Text style={styles.alias}>Kai Đinh</Text>
        </Text>
      </View>
    </View>
  );
};

export default SectionListItem;
