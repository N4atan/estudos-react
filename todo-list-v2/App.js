import React, { useState } from 'react';
import { View } from 'react-native';
import TopMenu from './src/components/TopMenu';
import Calendar from './src/components/Calendar';
import styles from './src/assets/StyleSheets';
import TaskWritter from './src/components/TaskWriter';
import TaskList from './src/components/TaskList';

export default function App() {
  const [arrayTask, setArrayTask] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Adicione este estado

  const salvarTarefa = (task) => {
    setArrayTask([...arrayTask, task]);
  };

  const changeIsDone = (task) => {
    setArrayTask(prev =>
      prev.map(t =>
        t === task ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  return (
    <View style={styles.container}>
      {isHeaderVisible && (  // Condicional para mostrar/esconder
        <>
          <TopMenu />
          <Calendar />
        </>
      )}
      <TaskList
        arrayTask={arrayTask}
        selectIsDone={changeIsDone}
        onScrollHeader={setIsHeaderVisible} // Passando o setter
      />
      <TaskWritter onSave={salvarTarefa} />
    </View>
  );
}