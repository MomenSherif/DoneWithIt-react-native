import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card from './app/components/Card';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View style={{ backgroundColor: '#f8f4f4', padding: 20, paddingTop: 100 }}>
      <Card
        title="Red jacket for sale!"
        subtitle="$100"
        image={require('./app/assets/jacket.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});
