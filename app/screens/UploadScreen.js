import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import Text from '../components/Text';

export default function UploadScreen({
  visible = false,
  progress = 0,
  onDone,
}) {
  return (
    <Modal visible={visible} statusBarTranslucent>
      <View style={styles.container}>
        {progress < 1 ? (
          <Text>{progress * 100}%</Text>
        ) : (
          <LottieView
            source={require('../assets/animations/done.json')}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
