import React, { useState } from 'react';
import { View, Text, CheckBox} from 'react-native';
import styles from '../assets/StyleSheets'

export default function TaskCard({task, selectIsDone}){

    return (
        <View style={styles.taskCard} >
            <CheckBox
            value={task.isDone}
            onValueChange={() => selectIsDone(task)}
            />
            <Text style={[styles.taskCardText, task.isDone && styles.taskCardTextDone]}
            >
                {task.title} & {task.id}
            </Text>
        </View>
    );
}