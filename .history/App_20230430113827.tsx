import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import Section from './components/Content/Section/Section';
import SectionItem from './components/Content/SectionItem/SectionItem';

const App = () => {
  return (
    <ScrollView>
      <Section></Section>
    </ScrollView>
  );
};

export default App;
