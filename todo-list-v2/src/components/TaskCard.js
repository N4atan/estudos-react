import React, { useState } from 'react';
import { View, Text, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../assets/StyleSheets'

export default function TaskCard({task, selectIsDone, selectIfDelete}){

    return (
        <View style={styles.taskCard} >
            <CheckBox
            value={task.isDone}
            onValueChange={() => selectIsDone(task)}
            style={{alignSelf: 'center'}}
            />
            <View style={{ flex: 1, marginLeft: 10}}>
                <Text style={task.isDone && {textDecorationLine: 'line-through'}}
                >
                    {task.title}
                </Text>
            </View>
            <Icon name='close' size={24} color='#717171' style={{marginLeft: 'auto'}} onPress={() => { selectIfDelete(task) }}/>
        </View>
    );
}