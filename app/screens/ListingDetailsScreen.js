import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native-expo-image-cache';

import Text from '../components/Text';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ContactSellerForm from '../components/ContactSellerForm';

export default function ListingDetailsScreen() {
  const { params } = useRoute();
  const { images, title, price } = params;
  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}
      >
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
          <ContactSellerForm listing={params} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
