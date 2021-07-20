import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import Text from './Text';
import colors from '../config/colors';
import Constants from 'expo-constants';

export default function OfflineNotice() {
  const { isInternetReachable, type } = useNetInfo();
  console.log(type, isInternetReachable);
  if (type === 'unknown' || isInternetReachable) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});
