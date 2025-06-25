import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../assets/StyleSheets'




export default function TaskWritter(){
    const [ title , onChangeTitle ] = useState('');
    const [] = useState();


    return (
        <View style={styles.fixedFooter} >
            <SafeAreaView style={styles.areaTaskWritter}>
                <TextInput style={styles.taskWritterInput}
                value={title}
                onChangeText={onChangeTitle}
                keyboardType='default'
                placeholder='O que precisa fazer?'
                />

                <TouchableOpacity style={styles.taskWritterSave} >
                    <Text style={styles.taskWritterSaveText} >
                        Add
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}