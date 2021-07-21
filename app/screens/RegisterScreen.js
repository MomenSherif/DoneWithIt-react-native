import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormField, SubmitButton, ErrorMessage } from '../components/forms';
import Screen from '../components/Screen';
import { useRegister } from '../store/Auth';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).max(40).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
});

export default function RegisterScreen() {
  const [serverError, setServerError] = useState(false);
  const register = useRegister({
    onError: setServerError,
  });

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={register}
        validationSchema={validationSchema}
      >
        <>
          <ErrorMessage error={serverError} visible={!!serverError} />
          <FormField
            name="name"
            placeholder="Name"
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            textContentType="name"
          />
          <FormField
            name="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormField
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
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  submitBtn: {
    marginTop: 10,
  },
});
