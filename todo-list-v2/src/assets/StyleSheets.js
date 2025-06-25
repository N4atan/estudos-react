import React from 'react'
import { StyleSheet } from 'react-native';

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
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#141414',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    dayBoxText: {
        fontSize: 16,
        color: '#161616',
        fontWeight: '600'
    },
    calendar: {
        marginTop: 34,
    },
    calendarTitle: {
        marginLeft: 24,
        marginBottom: 12,
        fontSize: 28,
        fontWeight: '700'
    },
});

export default styles;
