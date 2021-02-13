import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Cameras', value: 3 },
];

export default function App() {
  const [value, setValue] = useState('');
  const [category, setCategory] = useState(null);
  return (
    <Screen>
      <AppTextInput
        icon='email'
        value={value}
        onChangeText={setValue}
        placeHolder="Username"
      />
      <AppPicker
        icon="apps"
        selectedItem={category}
        onSelectItem={setCategory}
        items={categories}
        placeholder="Categories"
        value={category}
        onChange={setCategory}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});
