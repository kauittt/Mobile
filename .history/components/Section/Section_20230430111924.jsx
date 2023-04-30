import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

const SectionItem = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.section__heading}>Giai điệu vi vu</Text>
      <View style={styles.sectionList}></View>
    </View>
  );
};

export default SectionItem;
