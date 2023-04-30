import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const SectionListItem = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.section__heading}>Giai điệu vi vu</Text>
      <View style={styles.sectionList}>
        <View style={styles.sectionListItem} dataId="ZOCFAE67">
          <View style={styles.sectionListItemImg} dataId="ZOCFAE67">
            <View style={styles.sectionListItemImg__inner}>
              <Image
                source={{
                  uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/7/b/7e7b8f07e9af15dc2fa3424d237bfff7.jpg',
                }}
                resizeMode="cover" // to ensure the image covers the whole area and doesn't get stretched
                style={styles.sectionListItemImg__image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionListItem__heading}>
              Đường Về Thật Chill
            </Text>
            <Text style={styles.sectionListItem__desc}>
              <Text style={{color: '#212121'}}>Phương Ly, </Text>
              <Text style={{color: '#212121'}}>Hoàng Dũng, </Text>
              <Text style={{color: '#212121'}}>GREY D, </Text>
              <Text style={{color: '#212121'}}>Kai Đinh</Text>
            </Text>
          </View>
        </View>

        {/* <View style={styles.sectionListItem} dataId="6B9B6ZZC">
          <View style={styles.sectionListItemImg} dataId="6B9B6ZZC">
            <View style={styles.sectionListItemImg__inner}>
              <Image
                source={{
                  uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/3/b/0/d3b07b59f3b79bf0cab9ff8d31e011f7.jpg',
                }}
                resizeMode="cover" // to ensure the image covers the whole area and doesn't get stretched
                style={styles.sectionListItemImg__image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionListItem__heading}>Lofi Drive</Text>
            <Text style={styles.sectionListItem__desc}>
              <Text style={{color: '#212121'}}>Aiguille, </Text>
              <Text style={{color: '#212121'}}>G Mills, </Text>
              <Text style={{color: '#212121'}}>Mama Aiuto, </Text>
              <Text style={{color: '#212121'}}>SwuM</Text>
            </Text>
          </View>
        </View>

        <View style={styles.sectionListItem} dataId="S0E6DF9A">
          <View style={styles.sectionListItemImg} dataId="S0E6DF9A">
            <View style={styles.sectionListItemImg__inner}>
              <Image
                source={{
                  uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/5/f/a/55fa8c513461bef6c8e37f188347e0eb.jpg',
                }}
                resizeMode="cover" // to ensure the image covers the whole area and doesn't get stretched
                style={styles.sectionListItemImg__image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionListItem__heading}>
              Lăn Bánh Cùng V-Pop
            </Text>
            <Text style={styles.sectionListItem__desc}>
              <Text style={{color: '#212121'}}>Ngọt, </Text>
              <Text style={{color: '#212121'}}>Pháo, </Text>
              <Text style={{color: '#212121'}}>AMEE, </Text>
              <Text style={{color: '#212121'}}>Da LAB</Text>
            </Text>
          </View>
        </View>

        <View style={styles.sectionListItem} dataId="60EUC8BC">
          <View style={styles.sectionListItemImg} dataId="60EUC8BC">
            <View style={styles.sectionListItemImg__inner}>
              <Image
                source={{
                  uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/6/6/d/266d1903afe5af278f886f26886bb3a8.jpg',
                }}
                resizeMode="cover" // to ensure the image covers the whole area and doesn't get stretched
                style={styles.sectionListItemImg__image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionListItem__heading}>Happy Drive</Text>
            <Text style={styles.sectionListItem__desc}>
              <Text style={{color: '#212121'}}>Justin Timberlake, </Text>
              <Text style={{color: '#212121'}}>Clean Bandit, </Text>
              <Text style={{color: '#212121'}}>Dua Lipa, </Text>
              <Text style={{color: '#212121'}}>Sia</Text>
            </Text>
          </View>
        </View>

        <View style={styles.sectionListItem} dataId="6B9CBO0A">
          <View style={styles.sectionListItemImg} dataId="6B9CBO0A">
            <View style={styles.sectionListItemImg__inner}>
              <Image
                source={{
                  uri: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/1/3/8/f138a02472481738a6660e97421ceff2.jpg',
                }}
                resizeMode="cover" // to ensure the image covers the whole area and doesn't get stretched
                style={styles.sectionListItemImg__image}
              />
            </View>
          </View>
          <View>
            <Text style={styles.sectionListItem__heading}>
              Cung Đàn Trên Cung Đường
            </Text>
            <Text style={styles.sectionListItem__desc}>
              <Text style={{color: '#212121'}}>Thịnh Suy, </Text>
              <Text style={{color: '#212121'}}>Orange, </Text>
              <Text style={{color: '#212121'}}>Hoàng Dũng, </Text>
              <Text style={{color: '#212121'}}>Phạm Nguyên Ngọc</Text>
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default SectionListItem;
