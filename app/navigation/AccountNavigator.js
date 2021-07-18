import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AccountDetailsScreen from '../screens/AccountDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();

export default function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ACCOUNT_DETAILS}
        component={AccountDetailsScreen}
      />
      <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    </Stack.Navigator>
  );
}
