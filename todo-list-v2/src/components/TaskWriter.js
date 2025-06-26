import React, { useState, useRef } from 'react';
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from '../assets/StyleSheets';

export default function TaskWritter(Props) {
    const [title, onChangeTitle] = useState('');
    const taskId = useRef(0);

    const handleSave = () => {
        if (title === '') return;

        const newTask = {
            id: taskId.current++,
            title,
            isDone: false
        };

        Props.onSave(newTask);
        onChangeTitle('');
    };

    return (
        <View style={styles.fixedFooter}>
            <BlurView intensity={5} tint="light" style={styles.blurBox}>
                <SafeAreaView style={styles.areaTaskWritter}>
                    <TextInput
                        style={styles.taskWritterInput}
                        autoFocus
                        value={title}
                        onChangeText={onChangeTitle}
                        keyboardType='default'
                        placeholder='O que precisa fazer?'
                        placeholderTextColor="#999"
                    />

                    <TouchableOpacity style={styles.taskWritterSave} onPress={handleSave}>
                        <Text style={styles.taskWritterSaveText}>Add</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </BlurView>
        </View>
    );
}
