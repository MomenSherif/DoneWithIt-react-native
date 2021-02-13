import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from './AppButton';

export default function SubmitButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit} buttonStyle={style} />
  )
}
