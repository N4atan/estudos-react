import React from 'react';
import { SafeAreaView, View, Text, SectionList } from 'react-native';
import TaskCard from './TaskCard';
import styles from '../assets/StyleSheets';

export default function TaskList({ arrayTask, selectIsDone, selectIfDelete }) {
    return (
        <SafeAreaView style={styles.taskList}>
            <SectionList
                sections={[
                    { title: 'Afazeres'   , colorTitle: '#f72c2c' , data: arrayTask.filter(tarefa => !tarefa.isDone) },
                    { title: 'Concluidas' , colorTitle: '#2cf736' , data: arrayTask.filter(tarefa => tarefa.isDone) }
                ]}
                renderSectionHeader={({ section }) => (
                    section.data.length > 0 && <Text style={[styles.taskListHeader, {color: section.colorTitle}]}>
                        {section.title} - {section.data.length}
                    </Text>
                )}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TaskCard task={item} selectIsDone={selectIsDone} selectIfDelete={selectIfDelete} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </SafeAreaView>
    );
}