import React from 'react';
import { SafeAreaView, View, Text, SectionList } from 'react-native';
import TaskCard from './TaskCard';
import styles from '../assets/StyleSheets';

export default function TaskList({ arrayTask, selectIsDone, onScrollHeader }) {
    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (onScrollHeader) onScrollHeader(offsetY <= 30);
    };

    return (
        <SafeAreaView style={styles.taskList}>
            <SectionList
                sections={[
                    { title: 'Afazeres', data: arrayTask.filter(tarefa => !tarefa.isDone) },
                    { title: 'Concluidas', data: arrayTask.filter(tarefa => tarefa.isDone) }
                ]}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.taskListHeader}>{title}</Text>
                )}
                keyExtractor={(item) => item.id.toString()} // Corrigido: adicione .toString()
                renderItem={({ item }) => (
                    <TaskCard task={item} selectIsDone={selectIsDone} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingBottom: 110 }}
            />
        </SafeAreaView>
    );
}