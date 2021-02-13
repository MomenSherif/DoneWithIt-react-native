import React from 'react';
import { StyleSheet, Text } from 'react-native';

import defaultStyles from '../config/styles';

export default function AppText({ style, children, ...props }) {
  return (
    <Text style={[defaultStyles.text, style]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({

});