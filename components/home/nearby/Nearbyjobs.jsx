import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';


const menuItems = [
  {
    id: 1,
    name: "Plain Bagel",
    description: "Freshly baked plain bagel",
    price: 2.99,
    image: require("../../../assets/plain.png")
  },
  {
    id: 2,
    name: "Everything Bagel",
    description: "Freshly baked everything bagel",
    price: 3.49,
    image: require("../../../assets/every.png")
  },
  {
    id: 3,
    name: "Cinnamon Raisin Bagel",
    description: "Freshly baked cinnamon raisin bagel",
    price: 3.49,
    image: require("../../../assets/cin.png")
  },
  // add more menu items here
];


const Nearbyjobs = () => {
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>All Day Menu</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.cardsContainer}>
      <FlatList
  data={menuItems}
  renderItem={({ item }) => (
    <TouchableOpacity 
  activeOpacity={0.6}
  onPress={() => handleCardPress(item)}>
  <View style={styles.menuItem}>
    <View style={styles.menuItemDetails}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
      <Text style={styles.menuItemPrice}>${item.price}</Text>
    </View>
    <Image source={item.image} style={styles.menuItemImage} />
  </View>
</TouchableOpacity>

  )}
  keyExtractor={(item, index) => index.toString()}
  contentContainerStyle={{ padding: 16 }}
/>

      </View>
    </View>
  );
};

export default Nearbyjobs;


