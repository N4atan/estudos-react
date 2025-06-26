import React from 'react';
import { SectionList, View, Text } from 'react-native';
import TaskCard from './TaskCard';
import styles from '../assets/StyleSheets'

export default function TaskList(Props){
    return (
        <View style={styles.taskList} >
            <SectionList
            sections={[
                    {title: 'Afazeres  ' , data: Props.arrayTask.filter(tarefa => tarefa.isDone === false )},
                    {title: 'Concluidas' , data: Props.arrayTask.filter(tarefa => tarefa.isDone === true  )}
            ]}
            renderSectionHeader={({section: { title }}) => (
                <Text style={styles.taskListHeader}>
                    {title}
                </Text>
            )}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <TaskCard task={item} selectIsDone={Props.selectIsDone}/> //Trocar por componente Task - Retangulo com nome e a checkbox que altera o 'isDone' - Como o componente vai recer a tarefa como props, pode ter o setIsDone usando como state o valor do obj
            )}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>
    );
}