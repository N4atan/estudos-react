import React from 'react'
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import TaskWritter from '../components/TaskWriter';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'System'
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
        backgroundColor: '#d9d9d9',
    },
    calendar: {
        marginTop: 34,
    },
    calendarTitle: {
        marginLeft: 24,
        marginBottom: 16,
        fontSize: 28,
        fontWeight: '700'
    },
    fixedFooter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        zIndex: 10,
    },

    blurBox: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fallback para Android
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.3)',
    },
    areaTaskWritter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    taskWritterInput: {
        backgroundColor: '#f0f0f0',
        color: '#141414',
        fontSize: 14,
        width: '75%', // ✅ Ajuste para 75% (evita conflito com o botão)
        height: 60,
        paddingLeft: 10,
        borderRadius: 5,
    },
    taskWritterSave: {
        backgroundColor: '#141414',
        width: '23%', // ✅ Ajuste para 23% (evita quebra de linha)
        height: 60,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskWritterSaveText: {
        color: '#ffffff',
        fontSize: 18,
    },
    taskList: {
        flex: 1,
        marginTop: 10,
        paddingBottom: 110, // Altura do input fixo + margem
    },
    taskListHeader: {
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
    taskCardText: {
        marginLeft: 15,
    },
    taskCardTextDone: {
        textDecorationLine: 'line-through',
    }
});

export default styles;
