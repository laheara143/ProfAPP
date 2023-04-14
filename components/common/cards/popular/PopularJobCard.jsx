import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { checkImageURL } from '../../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
});

const BagelMenu = () => {
  const bagels = [
    { name: "Plain Bagel", price: "$2.99" },
    { name: "Everything Bagel", price: "$3.49" },
    { name: "Poppy Seed Bagel", price: "$2.99" },
    { name: "Sesame Seed Bagel", price: "$2.99" },
    { name: "Onion Bagel", price: "$2.99" },
    { name: "Garlic Bagel", price: "$3.49" },
    { name: "Cinnamon Raisin Bagel", price: "$3.99" },
    { name: "Blueberry Bagel", price: "$3.99" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bagel Menu</Text>
      {bagels.map((bagel) => (
        <View key={bagel.name} style={styles.item}>
          <Text style={styles.itemName}>{bagel.name}</Text>
          <Text style={styles.itemPrice}>{bagel.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default BagelMenu;
