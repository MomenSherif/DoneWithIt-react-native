import { useEffect } from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import * as expoPushTokenApi from '../api/expoPushTokens';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  if (!Constants.isDevice) return;

  const { granted } = await Notifications.requestPermissionsAsync();
  if (!granted) return alert('Failed to get push token for push notification!');

  const token = (await Notifications.getExpoPushTokenAsync()).data;

  expoPushTokenApi.register(token);

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      sound: true,
    });
  }

  return token;
}

export default function useNotifications(onPress) {
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => console.log(token));

    // Will be called when notification recieved
    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log({ notification });
      },
    );

    // Will be called when click on the notification
    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log({ response });
        onPress?.();
      });

    return () => {
      notificationListener?.remove?.();
      responseListener?.remove?.();
    };
  }, []);
}
