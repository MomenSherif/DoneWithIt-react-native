import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

import Text from '../components/Text';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/Button';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import * as listingsApi from '../api/listings';
import useQuery from '../Hooks/useQUery';

function ListingScreen() {
  const {
    loading,
    error,
    data: listings,
    refetch,
  } = useQuery(listingsApi.getListings);
  const navigation = useNavigation();

  if (loading) return <ActivityIndicator visible={loading} />;

  if (error)
    return (
      <>
        <Text style={styles.error}>Something Went Wrong</Text>
        <Button title="Retry" onPress={refetch} />
      </>
    );

  return (
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={`$${item.price}`}
          imageUrl={item.images[0]?.url}
          onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
        />
      )}
    />
  );
}

export default () => {
  return (
    <Screen style={styles.screen}>
      <ListingScreen />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.light,
  },
  spinner: { marginTop: 40 },
  error: { textAlign: 'center', marginBottom: 20 },
});
