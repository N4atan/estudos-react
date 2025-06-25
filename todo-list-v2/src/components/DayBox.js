import React from 'react';
import styles from '../assets/StyleSheets';
import { View, Text } from 'react-native-web';

export default function DayBox(Props){
    return (
        <View
        style={[styles.dayBox, Props.data.isToday && styles.dayBoxToday]}
        >
            <Text style={styles.dayBoxText} >
                {Props.data.nomeDia}
            </Text>
            <Text style={styles.dayBoxText} >
                {Props.data.numDia}
            </Text>
        </View>
    );
}