import React from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';

export default function List(Props){
    return (
        <SafeAreaView>
            <FlatList
                data={Props.dados}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <Text>
                        {item.taskName}
                    </Text>
                }
            />
        </SafeAreaView>
    );
}

/* Explicações sobre cada atributo:
 - data
É nela que indicamos qual é a fonte de dados.

 - keyExtrator
Define qual propriedade do item será usada como chave única (obrigatória para listas no React).
Nesse caso, pego o index da tarefa, mas caso tivesse 'id', poderia ser ele tambem. Ex:
__keyExtractor={item => item.id}__

 - renderItem
Diz como renderizar cada item da lista.
*/