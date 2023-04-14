import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';
import styles from './popularjobs.style';

const menuItems = [
  {
    name: "Plain Bagel",
    description: "Freshly baked plain bagel",
    price: 2.99
  },
  {
    name: "Everything Bagel",
    description: "Freshly baked everything bagel",
    price: 3.49
  },
  {
    name: "Cinnamon Raisin Bagel",
    description: "Freshly baked cinnamon raisin bagel",
    price: 3.49
  },
  // add more menu items here
];


const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>Popular Menu Items</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Order Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      <FlatList
  data={menuItems}
  renderItem={({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
      <Text style={styles.menuItemPrice}>${item.price}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
  contentContainerStyle={{ padding: 16 }}
/>

      </View>
    </View>
  );
};

export default Popularjobs;


