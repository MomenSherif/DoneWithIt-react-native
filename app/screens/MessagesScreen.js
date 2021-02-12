import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
  {
    id: 1,
    title: 'Title 1',
    description: 'Description 1',
    image: require('../assets/demon-slayer.jpg'),
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'Description 2',
    image: require('../assets/demon-slayer.jpg'),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('Message', item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});