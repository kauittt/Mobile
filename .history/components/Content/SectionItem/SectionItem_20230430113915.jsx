import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const SectionItem = ({url, title, singers}) => {
  // {url, title, singers}
  return (
    <View style={styles.sectionListItem} dataId="ZOCFAE67">
      <View style={styles.sectionListItemImg} dataId="ZOCFAE67">
        <View style={styles.sectionListItemImg__inner}>
          <Image
            source={{
              uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg',
            }}
            resizeMode="cover"
            style={styles.sectionListItemImg__image}
          />
        </View>
      </View>
      <View>
        <Text style={styles.sectionListItem__heading}>Đường Về Thật Chill</Text>
        <Text style={styles.sectionListItem__desc}>
          <Text style={{color: '#212121'}}>Phương Ly, </Text>
          <Text style={{color: '#212121'}}>Hoàng Dũng, </Text>
          <Text style={{color: '#212121'}}>GREY D, </Text>
          <Text style={{color: '#212121'}}>Kai Đinh</Text>
          {sing}
        </Text>
      </View>
    </View>
  );
};

export default SectionItem;
