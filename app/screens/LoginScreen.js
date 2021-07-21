import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import { FormField, SubmitButton, ErrorMessage } from '../components/forms';
import Screen from '../components/Screen';
import { useLogin } from '../store/Auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {
  const [visibleError, setVisibleError] = useState(false);
  const login = useLogin({
    onError: () => setVisibleError(true),
  });

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
        <>
          <ErrorMessage
            error="Invalid email and/or password."
            visible={visibleError}
          />
          <FormField
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <FormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            secureTextEntry
            textContetType="password"
          />
          <SubmitButton title="Login" style={styles.submitBtn} />
        </>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  submitBtn: {
    marginTop: 10,
  },
});
