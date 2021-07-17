import React, { useState, useEffect } from 'react';
import { Alert, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={setImageUri} />
    </Screen>
  );
}

const styles = StyleSheet.create({});
