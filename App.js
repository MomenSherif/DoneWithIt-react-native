import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppText from './app/components/AppText';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AppText >I Love React Native</AppText>
    </View>
  );
}

const styles = StyleSheet.create({

});
