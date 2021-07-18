import React from 'react';
import { ImageBackground, Text, StyleSheet, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import routes from '../navigation/routes';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagLine}>Sell What You Don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          buttonStyle={styles.registerButton}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
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
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 20,
  },
  buttonsContainer: {
    padding: 20,
  },
  registerButton: {
    marginTop: 20,
  },
});
