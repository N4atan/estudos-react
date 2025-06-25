

import { FlatList, View, Text } from 'react-native';
import styles from '../assets/StyleSheets';
import Daybox from './DayBox';

const mes = [
    {nomeDia: 'QUA', numDia: 25},
    {nomeDia: 'QUI', numDia: 26},
    {nomeDia: 'SEX', numDia: 27},
    {nomeDia: 'SAB', numDia: 28},
    {nomeDia: 'DOM', numDia: 29},
    {nomeDia: 'SEG', numDia: 30},
]

export default function Calendar(){
    return (
        <View style={styles.calendar}>
            <Text style={styles.calendarTitle} >
                Hoje
            </Text>

            <FlatList
            data={mes}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={((item) => {item.numDia.toString()})}
            renderItem={({item}) => (
                <Daybox
                nomeDia={item.nomeDia}
                numDia={item.numDia}
                />
            )}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            />
        </View>
    );
}