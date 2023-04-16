import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';
import { popularItems } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';
import { BagelMenu, styles } from './popularjobs.style';


const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate('Menu', { job: item });
  };//Fix transition to new screen

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
          data={popularItems}
          renderItem={({ item }) => (
            <TouchableOpacity 
  onPress={() => handleCardPress(item)}
  activeOpacity={0.6}
>
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

export default Popularjobs;
