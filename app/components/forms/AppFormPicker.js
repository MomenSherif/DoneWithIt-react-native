import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ name, icon, placeholder, items }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <AppPicker
        items={item}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
        icon={icon}
        placeholder={placeholder}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
