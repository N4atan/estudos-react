import React, { useState } from 'react';
import { View, Button } from 'react-native';
import Form from '../Form';
import List from '../List'
import ModalNewTask from '../Modal';


export default function Main(){
    const [tasksData       , setTasksData    ] = useState([]);
    const [modalVisible    , setModalVisible ] = useState(false);


    return (
        <View>
            <Button
            title='Adicionar Tarefa'
            onPress={() => setModalVisible(true)}
            setTasksData={setTasksData}
            />


            <List dados={tasksData} />

            <ModalNewTask
            active={modalVisible}
            onClose={() => setModalVisible(false)}
            data={tasksData}
            setTasksData={setTasksData} // ✅ adiciona isso
            />
        </View>
    );
}