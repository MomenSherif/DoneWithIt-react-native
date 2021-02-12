import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = id => {
    setMessages(messages.filter(m => m.id !== id));
  };

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
            renderRightActions={(props) => <ListItemDeleteAction {...props} onPress={() => handleDelete(item.id)} />}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(prev => [...prev, { ...prev[0], id: Math.random() }])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

});