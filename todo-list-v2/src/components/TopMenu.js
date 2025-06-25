import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import styles from '../assets/StyleSheets';


export default function TopMenu(){
    return (
        <SafeAreaView style={styles.header} >
            <Text style={styles.title} >
                Project Todo-List
            </Text>
        </SafeAreaView>
    );
}
