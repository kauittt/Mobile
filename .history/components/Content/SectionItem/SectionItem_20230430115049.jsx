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
            source={{uri: url}}
            resizeMode="cover"
            style={styles.sectionListItemImg__image}
          />
        </View>
      </View>
      <View>
        {/* Đường Về Thật Chill */}
        <Text style={styles.sectionListItem__heading}>{title}</Text>
        <Text style={styles.sectionListItem__desc}>
          {singers.map((item, index) => {
            if (index === singers.length - 1) {
              return <Text key={index}>{item}</Text>;
            } else {
              return <Text key={index}>{item}, </Text>;
            }
          })}
        </Text>
      </View>
    </View>
  );
};

export default SectionItem;
