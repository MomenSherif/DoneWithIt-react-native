import React, { useState, useEffect } from 'react';
import { Alert, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => setImageUris((uris) => uris.concat(uri));

  const handleRemove = (uri) =>
    setImageUris((uris) => uris.filter((u) => u !== uri));

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
