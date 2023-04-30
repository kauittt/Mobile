import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';
import SectionItem from '../SectionItem/SectionItem';

const Section = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.section__heading}>Giai điệu vi vu</Text>
      <View style={styles.sectionList}>
        <SectionItem
          url="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg"
          title="Đường Về Thật Chill"
          singers={['Phương Ly', 'Hoàng Dũng', 'GREY D', 'Kai Đinh']}\
        />
      </View>
    </View>
  );
};

export default Section;
