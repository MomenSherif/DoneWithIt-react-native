import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from './AppText';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({ icon, items, selectedItem, onSelectItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = item => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          <AppText style={[styles.text, !selectedItem && { color: defaultStyles.colors.medium }]}>
            {selectedItem?.label ?? placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" >
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem label={item.label} onPress={() => handleSelect(item)} />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10,
  },
  text: {
    ...defaultStyles.text,
  },
});
