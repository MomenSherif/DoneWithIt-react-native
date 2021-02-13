import React from 'react'
import { StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppFormField, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).max(40).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField
            name="name"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            textContentType="name"
          />
          <AppFormField
            name="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            secureTextEntry
            textContetType="password"
          />
          <SubmitButton title="Register" style={styles.submitBtn} />
        </>
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  submitBtn: {
    marginTop: 10,
  },
});
