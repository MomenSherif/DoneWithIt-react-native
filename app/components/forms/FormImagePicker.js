import { useFormikContext } from 'formik';
import React from 'react';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

export default function FormImagePicker({ name }) {
  const { setFieldValue, values, touched, errors } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => setFieldValue(name, imageUris.concat(uri));

  const handleRemove = (uri) =>
    setFieldValue(
      name,
      imageUris.filter((u) => u !== uri),
    );

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
