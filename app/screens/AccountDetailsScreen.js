import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigation/routes';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Message',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

export default function AccountDetailsScreen() {
  const navigation = useNavigation();
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mo'men Sherif"
          subtitle="momensherif.2019@gmail.com"
          image={require('../assets/demon-slayer.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon {...item.icon} />}
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
