import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

export default function AppButton({
  title,
  onPress,
  color = 'primary',
  buttonStyle,
  textStyle,
  disabled,
  ...props
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        disabled && {
          backgroundColor: '#D8D8D8',
        },
        buttonStyle,
      ]}
      onPress={onPress}
      {...props}
    >
      <Text style={[styles.text, textStyle, disabled && { color: '#8D8D8D' }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
