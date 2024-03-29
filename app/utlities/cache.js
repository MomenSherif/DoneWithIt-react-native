import AsyncStorage from '@react-native-async-storage/async-storage';
import { differenceInMinutes } from 'date-fns';

const prefix = 'cache - ';
const expiryInMinutes = 5;

export const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) =>
  differenceInMinutes(Date.now(), item.timestamp) > expiryInMinutes;

export const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
};
