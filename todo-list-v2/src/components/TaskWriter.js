import React, { useState, useRef } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../assets/StyleSheets';

export default function TaskWritter(Props) {
    const [title, onChangeTitle] = useState('');
    

    const handleSave = () => {
        if (title === '') return;

        const newTask = {
            id: Date.now(),
            title,
            isDone: false
        };

        Props.onSave(newTask);
        onChangeTitle('');
    };

    return (
        <BlurView style={styles.areaTaskWritter} intensity={50} tint='light'>
                <TextInput
                    style={styles.taskWritterInput}
                    value={title}
                    onChangeText={onChangeTitle}
                    keyboardType='default'
                    placeholder='O que precisa fazer?'
                    placeholderTextColor="#999"
                />

                <TouchableOpacity style={styles.taskWritterSave} onPress={handleSave}>
                    <Text style={styles.taskWritterSaveText}>Add</Text>
                </TouchableOpacity>
        </BlurView>
    );
}
