import React, { useEffect } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

const requestPermission = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!granted)
    Alert.alert(
      'Permission Deined!',
      'Sorry, we need camera roll permissions to make this work!',
    );
};

export default function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = async () => {
    if (!imageUri) pickImage();
    else {
      Alert.alert(
        'Delete',
        'Are you sure you want to delete this image?',
        [{ text: 'Yes', onPress: () => onChangeImage(null) }, { text: 'No' }],
        {
          cancelable: true,
        },
      );
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });

    if (!result.cancelled) onChangeImage(result.uri);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
