import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native-expo-image-cache';

import Text from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
  const { params } = useRoute();
  const { images, title, price } = params;
  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: images[0]?.thumbnailUrl }}
        uri={images[0]?.url}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>

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
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
