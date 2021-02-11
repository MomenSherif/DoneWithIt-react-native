import React from 'react';
import { ImageBackground, Text, StyleSheet, View, Image } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text>Sell What You Don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    height: 70,
    backgroundColor: '#4ecdc4',
  },
});