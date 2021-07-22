import React from 'react';
import { Keyboard, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { FormField, SubmitButton } from '../components/forms';
import * as messagesApi from '../api/messages';

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Awesome!',
      body: 'Your message was sent to the seller.',
    },
    trigger: {
      seconds: 2,
    },
  });
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});

export default function ContactSellerForm({ listing }) {
  const handleSubmit = ({ message }, { resetForm }) => {
    Keyboard.dismiss();
    return messagesApi
      .send(message, listing.id)
      .then(() => {
        resetForm();
        schedulePushNotification();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Error', 'Could not send the message to the seller.');
      });
  };
  return (
    <Formik
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <>
        <FormField
          maxLength={255}
          multiline
          name="message"
          numberOfLines={3}
          placeholder="Message..."
        />
        <SubmitButton title="Contact Seller" />
      </>
    </Formik>
  );
}
