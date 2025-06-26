import React, { useState } from 'react';
import { View } from 'react-native';
import TopMenu from './src/components/TopMenu';
import Calendar from './src/components/Calendar';
import styles from './src/assets/StyleSheets';
import TaskWritter from './src/components/TaskWriter';
import TaskList from './src/components/TaskList';





export default function App() {
  const [arrayTask       , setArrayTask    ] = useState([]);

  const salvarTarefa = (task) => {
    setArrayTask([...arrayTask, task])
  }

  const changeIsDone = (task) => {
    setArrayTask(prev =>
      prev.map(t =>
        t === task ? { ...t, isDone: !t.isDone } : t
      )
    )};


  return (
    <View style={styles.container}>
      <TopMenu     />
      <Calendar    />
      <TaskList     arrayTask = { arrayTask    }  selectIsDone={changeIsDone}  />
      <TaskWritter  onSave    = { salvarTarefa }    />
    </View>
  );
}


