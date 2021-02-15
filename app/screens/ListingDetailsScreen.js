import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Text from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red jacket for sale!</Text>
        <Text style={styles.price}>$100</Text>

        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/demon-slayer.jpg')}
            title="Demon Slayer"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  userContainer: {
    marginVertical: 40,
  },
});
