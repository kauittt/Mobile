import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import SectionListItem from './components/SectionListItem/SectionListItem';

const App = () => {
  return (
    <ScrollView>
      <SectionListItem></SectionListItem>
    </ScrollView>
  );
};

export default App;
