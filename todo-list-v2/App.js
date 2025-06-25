import { View } from 'react-native';
import TopMenu from './src/components/TopMenu';
import Calendar from './src/components/Calendar';
import styles from './src/assets/StyleSheets';
import TaskWritter from './src/components/TaskWriter';

export default function App() {
  return (
    <View style={styles.container}>
      <TopMenu />
      <Calendar />
      <TaskWritter />
    </View>
  );
}


