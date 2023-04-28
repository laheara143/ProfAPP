import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { checkImageURL } from '../../../../utils';

//Not importing
//import { menuData } from '../../menuData'


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
    flex: 1/2, // set the width of each item to 50% of the container
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const BagelMenu = () => {
  const bagels = menuData.filter(item => item.category === "Bagels");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bagel Menu</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {bagels.map((bagel) => (
          <View key={bagel.name} style={styles.item}>
            <Text style={styles.itemName}>{bagel.name}</Text>
            <Text style={styles.itemPrice}>{bagel.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BagelMenu;
