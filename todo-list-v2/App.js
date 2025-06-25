import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopMenu from './src/components/TopMenu';
import Calendar from './src/components/Calendar';
import styles from './src/assets/StyleSheets';

export default function App() {
  return (
    <View style={styles.container}>
      <TopMenu />
      <Calendar />
    </View>
  );
}


