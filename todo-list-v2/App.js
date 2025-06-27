import React, { useState, useEffect } from 'react';
import storage from './storageService';
import { View } from 'react-native';
import TopMenu from './src/components/TopMenu';
import Calendar from './src/components/Calendar';
import styles from './src/assets/StyleSheets';
import TaskWritter from './src/components/TaskWriter';
import TaskList from './src/components/TaskList';



export default function App() {
  const [arrayTask, setArrayTask] = useState([]);

  const salvarTarefa = (task) => {
    setArrayTask([...arrayTask, task]);
  };

  const changeIsDone = (task) => {
    setArrayTask(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, isDone: !t.isDone } : t
      )
    );
  };

  const deleteTask = (task) => {
    setArrayTask(prev => prev.filter(t => t.id !== task.id));
  };

  useEffect(() => {
    async function loadTasks() {
      const storedTasks = await storage.getItem('tasks');
      if (storedTasks) {
        setArrayTask(JSON.parse(storedTasks));
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    storage.setItem('tasks', JSON.stringify(arrayTask));
  }, [arrayTask]);




  return (
    <View style={styles.container}>
      <TopMenu />
      <Calendar />
      <View style={{ flex: 1, paddingBottom: 100 }}>
        <TaskList arrayTask={arrayTask} selectIsDone={changeIsDone} selectIfDelete={deleteTask} />
      </View>


      {/* Footer fixo (sobreposto) */}
      <TaskWritter onSave={salvarTarefa} />
    </View>
  );
}