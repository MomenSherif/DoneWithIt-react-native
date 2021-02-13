import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen() {

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, handleBlur, touched, }) => (
          <>
            <AppTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              secureTextEntry
              textContetType="password"
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title="Login" onPress={handleSubmit} buttonStyle={styles.submitBtn} />
          </>
        )}

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
    marginTop: 10
  },
});
