import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({ name, width, ...props }) {
  const { handleChange, handleBlur, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        width={width}
        value={values[name]}
        {...props}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
