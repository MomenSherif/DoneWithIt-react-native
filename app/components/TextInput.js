import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from '../config/styles';

export default function AppTextInput({ icon, width = '100%', ...props }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput
        style={styles.textInput}
        placeholderTextColor={defaultStyles.colors.medium}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    ...defaultStyles.text,
    flex: 1,
  },
});
