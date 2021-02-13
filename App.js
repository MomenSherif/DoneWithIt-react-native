import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';


export default function App() {
  const [value, setValue] = useState('');
  return (
    <Screen>
      <AppTextInput
        icon='email'
        value={value}
        onChangeText={setValue}
        placeHolder="Username"
      />
      <Text>Your name is {value}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({

});
