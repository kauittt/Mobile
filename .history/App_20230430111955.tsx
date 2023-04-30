import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

import SectionItem from './components/SectionItem/SectionItem';
import Section from './components/Section/Section';

const App = () => {
  return (
    <ScrollView>
      <Section></Section>
    </ScrollView>
  );
};

export default App;
