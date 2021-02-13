import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});


const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2 },
  { label: 'Camera', value: 3 },
];

export default function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={console.log}
        validationSchema={validationSchema}
      >
        <>
          <AppFormField
            name="title"
            placeholder="Title"
            maxLength={255}
          />
          <AppFormField
            name="price"
            placeholder="Price"
            maxLength={8}
            keyboardType="numeric"
          />
          <AppFormPicker
            name="category"
            placeholder="Category"
            items={categories}
          />
          <AppFormField
            name="description"
            placeholder="Description"
            multiline
            numberOfLines={3}
          />
          <SubmitButton title='Post' style={styles.submitBtn} />
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
  }
})
