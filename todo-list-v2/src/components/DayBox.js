import React from 'react';
import styles from '../assets/StyleSheets';
import { View, Text } from 'react-native-web';

export default function DayBox(Props){
    return (
        <View style={styles.dayBox} >
            <Text style={styles.dayBoxText} >
                {Props.nomeDia}
            </Text>
            <Text style={styles.dayBoxText} >
                {Props.numDia}
            </Text>
        </View>
    );
}