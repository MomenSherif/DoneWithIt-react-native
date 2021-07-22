import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { navigationRef } from './app/navigation/rootNavigation';
import OfflineNotice from './app/components/OfflineNotice';
import AuthProvider, { useTryAutoLogin, useUser } from './app/store/Auth';

function App() {
  const user = useUser();
  const [isReady, setIsReady] = useState(false);
  const tryAutoLogin = useTryAutoLogin();

  if (!isReady)
    return (
      <AppLoading
        startAsync={tryAutoLogin}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </>
  );
}

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
