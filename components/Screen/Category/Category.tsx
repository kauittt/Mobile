import React from "react";
import { View, Text, KeyboardAvoidingView} from "react-native";
import styles from "./style";
import Sidebar from "../../Sidebar/Sidebar";
const Category = () => {
    return(
        <View style={styles.container}>
            <Sidebar></Sidebar>
            <Text style={styles.text}>Category Screen</Text>
        </View>
    );
};

export default Category;