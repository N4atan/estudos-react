import React, { useState } from 'react'
import { SafeAreaView , Modal , View , Button } from 'react-native'
import Form from '../Form'


export default function ModalNewTask(Props) {

    function salvarTarefa(task) {
        Props.setTasksData([...Props.data, task]);
    }

  return (
    <SafeAreaView>
        <Modal
        animationType='slide'
        visible={Props.active}
        onRequestClose={Props.onClose}
        >
            <View>
                <Form onSave={salvarTarefa} />
                <Button title="Fechar" onPress={Props.onClose} />
            </View>

        </Modal>
    </SafeAreaView>
    );
}