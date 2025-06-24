import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button } from 'react-native';




export default function Form(Props){
    const [taskName        , setTaskName        ] = useState('');
    const [taskDescription , setTaskDescription ] = useState('');

    function handleSalvar() {
        if (taskName === '') {
        Alert.alert("Erro", "O campo nome é obrigatório", [
            { text: "OK", onPress: () => console.log("OK pressionado") }
        ]);
        return;
        }

        const newTask = {
        taskName,
        taskDescription
        };

        Props.onSave(newTask);
        setTaskName('');
        setTaskDescription('');

        Alert.alert("Sucesso", "Tarefa Adicionada a Sua Lista de Afazeres!", [
            { text: "OK", onPress: () => console.log("OK pressionado") }
        ]);
    }



    return (
        <View>
            <View>
                <Text>Qual é a tarefa ?</Text>
                <TextInput
                onChangeText={setTaskName}
                value={taskName}
                placeholder='Ex. Estudar'
                keyboardType='default' //Tipo de teclado que exibe ao selecionar o input.
                />


                <Text>Descrição (Opcional)</Text>
                <TextInput
                onChangeText={setTaskDescription}
                value={taskDescription}
                placeholder='Ex. Estudar React Nativo'
                keyboardType='default'
                />

                <Button title='Salvar' onPress={handleSalvar} />
            </View>
        </View>
    );
}

/*
Alert.alert(
  title,          // string
  message,        // string
  buttons?,       // array de objetos (opcional)
  options?        // objeto com opções extras (opcional)
)
*/