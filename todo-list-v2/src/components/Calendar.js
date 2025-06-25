

import { FlatList, View, Text } from 'react-native';
import styles from '../assets/StyleSheets';
import Daybox from './DayBox';

let calendario = [];
let diaHoje = new Date();

function createCalendar(){
    for(let i = -1; i <= 14; i++) {
        const data = new Date();
        data.setDate(diaHoje.getDate() + i);

        calendario.push({
            nomeDia: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'][data.getDay()],
            numDia: data.getDate(),
            isToday: diaHoje.toDateString() == data.toDateString(),
        })
    }
}


export default function Calendar(){
    createCalendar();
    return (
        <View style={styles.calendar}>
            <Text style={styles.calendarTitle} >
                Hoje
            </Text>

            <FlatList
            data={calendario}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={((item) => {item.numDia.toString()})}
            renderItem={({item}) => (
                <Daybox
                data={item}
                />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
        </View>
    );
}