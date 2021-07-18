import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
});
