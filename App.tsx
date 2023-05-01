import React, { useEffect, useState } from 'react';
import {Text, View, ScrollView, StyleSheet, Keyboard, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chart from './components/Screen/Chart/Chart';
import Discovery from './components/Screen/Discovery/Discovery';
import TopMusic from './components/Screen/TopMusic/TopMusic';
import NewMusic from './components/Screen/NewMusic/NewMusic';
import Category from './components/Screen/Category/Category';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
          headerShown: false,
          tabBarStyle: { 
            height: 56,
            paddingBottom: 4,
            paddingTop: 2,
            backgroundColor: '#fbe6e6'
          },
          tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold'},
          tabBarActiveTintColor: '#d14781',
          tabBarInactiveTintColor: '#32323d',
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="Khám Phá"
        >
        <Tab.Screen name="Khám Phá" component={Discovery} options={{
          tabBarIcon: ({size,focused,color}) => {
            return <FontAwesome5 
                name="compact-disc" 
                color= {color}
                size={size}>
            </FontAwesome5>;
          }
        }}/>
        <Tab.Screen name="Nhạc Mới" component={NewMusic} options={{
          tabBarIcon: ({size,focused,color}) => {
            return <FontAwesome 
                name="music" 
                color= {color}
                size={size}>
            </FontAwesome>
          }
        }}/>
        <Tab.Screen name="#MNchart" component={Chart} options={{
          tabBarIcon: ({size,focused,color}) => {
            return <Entypo 
                name="bar-graph" 
                color= {color}
                size={size}>
            </Entypo>
          }
        }}/>
        <Tab.Screen name="Thể Loại" component={Category} options={{
          tabBarIcon: ({size,focused,color}) => {
            return <FontAwesome 
                name="th-large" 
                color= {color}
                size={size}>
            </FontAwesome>
          }
        }}/>
        <Tab.Screen name="Top 100" component={TopMusic} options={{
          tabBarIcon: ({size,focused,color}) => {
            return <AntDesign 
                name="star" 
                color= {color}
                size={size}>
            </AntDesign>
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;
