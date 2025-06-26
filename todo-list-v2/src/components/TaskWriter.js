import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../assets/StyleSheets'




export default function TaskWritter(Props){
    const [ title , onChangeTitle ] = useState('');
    const [] = useState();

    const handleSave = () => {
        if(title === '') return

        const newTask = {
            title,
            isDone: false
        };

        Props.onSave(newTask);
        onChangeTitle('');
    }


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
                    <Text style={styles.taskWritterSaveText} onPress={handleSave}>
                        Add
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
}