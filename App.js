import React, { useEffect } from 'react';
import { Button, Text } from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Screen from './app/components/Screen';

const Tweets = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="Details"
        onPress={() =>
          navigation.navigate('TweetDetails', {
            id: 10,
            name: "Mo'men",
            age: 25,
          })
        }
      />
    </Screen>
  );
};

const TweetDetails = () => {
  const {
    params: { id, name, age },
  } = useRoute();

  return (
    <Screen>
      <Text>Tweet Details - {id}</Text>
      <Text style={{ fontSize: 20 }}>
        {name} {age}
      </Text>
    </Screen>
  );
};

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'crimson',
      },
      headerTintColor: '#fff',
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: `Tweet ${route.params.name}`,
      })}
    />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </>
  );
}
