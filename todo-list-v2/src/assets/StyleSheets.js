import React from 'react'
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import TaskWritter from '../components/TaskWriter';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        paddingLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#212121'
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    dayBox: {
        width: 70,
        height: 80,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#141414',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    dayBoxText: {
        fontSize: 16,
        color: '#161616',
        fontWeight: '600'
    },
    dayBoxToday: {
        backgroundColor: '#292929',
    },
    calendar: {
        marginTop: 10,
    },
    calendarTitle: {
        marginLeft: 24,
        marginBottom: 14,
        fontSize: 28,
        fontWeight: '700'
    },
    areaTaskWritter: {
        position: 'absolute',  // Mudar de 'sticky' para 'absolute'
        bottom: 0,
        zIndex: 1000,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingBottom: 20,
    },

    taskWritterInput: {
        backgroundColor: '#f0f0f0',
        color: '#141414',
        fontSize: 14,
        width: '75%', // ✅ Ajuste para 75% (evita conflito com o botão)
        height: 60,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    taskWritterSave: {
        backgroundColor: '#141414',
        width: '20%', // ✅ Ajuste para 23% (evita quebra de linha)
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskWritterSaveText: {
        color: '#ffffff',
        fontSize: 18,
    },
    taskList: {
        flex: 1,
        marginTop: 10,
    },
    taskListHeader: {
        marginVertical: 10,
        marginLeft: 28,
        fontSize: 14,
        fontWeight: '500'
    },
    taskCard: {
        alignSelf: 'center',
        alignItems: 'center',
        width: '95%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 5,
        shadowColor: '#141414',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,

    },
});

export default styles;
