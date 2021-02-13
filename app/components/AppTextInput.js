import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

export default function AppTextInput({ icon, ...props }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon} />}
      <TextInput
        style={styles.textInput}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.light,
    marginVertical: 10,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark,
    flex: 1
  },
});
