// storageService.js
import { Platform } from 'react-native';

let storage;

if (Platform.OS === 'web') {
  storage = {
    async getItem(key) {
      return Promise.resolve(localStorage.getItem(key));
    },
    async setItem(key, value) {
      localStorage.setItem(key, value);
      return Promise.resolve();
    }
  };
} else {
  const AsyncStorage = require('@react-native-async-storage/async-storage').default;
  storage = AsyncStorage;
}

export default storage;
