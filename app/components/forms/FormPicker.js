import React from 'react';
import { useFormikContext } from 'formik';

import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({ name, icon, placeholder, items, PickerItemComponent, numberOfColumns, width }) {
  const { values, errors, touched, setFieldValue } = useFormikContext();
  return (
    <>
      <Picker
        items={items}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item)}
        icon={icon}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
