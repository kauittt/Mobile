import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import SectionItem from './components/SectionItem/SectionItem';

const App = () => {
  return (
    <ScrollView>
      <SectionItem></SectionItem>
    </ScrollView>
  );
};

export default App;
