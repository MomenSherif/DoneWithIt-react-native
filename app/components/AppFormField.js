import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, ...props }) {
  const { handleChange, handleBlur, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({});
