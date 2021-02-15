import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from './Text';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  items,
  selectedItem,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = item => {
    setModalVisible(false);
    onSelectItem(item);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
          <Text style={[styles.text, !selectedItem && { color: defaultStyles.colors.medium }]}>
            {selectedItem?.label ?? placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide" >
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent item={item} label={item.label} onPress={() => handleSelect(item)} />
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
    flex: 1,
  },
});
