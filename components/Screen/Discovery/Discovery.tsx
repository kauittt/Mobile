import React from "react";
import styles from "./style";
import { Text, View } from "react-native";
import Content from "../../Content/Content/Content";
import Playlist from "../../Playlist/Playlist";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Discovery = () => {
    return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
    }}>
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="Playlist" component={Playlist} />
    </Stack.Navigator>
    );
};

export default Discovery;