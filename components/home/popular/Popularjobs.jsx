import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';
import { popularItems } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';
import { ProductSlider, styles } from './popularjobs.style';
import { BagelMenu, bagelMenuStyles } from './popularjobs.style';

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate('Menu', { job: item });
  }; // Fix transition to new screen

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleCardPress(item)} activeOpacity={0.6}>
        <View style={styles.menuItem}>
          <View style={styles.menuItemDetails}>
            <Text style={styles.menuItemName}>{item.name}</Text>
            <Text style={styles.menuItemDescription}>{item.description}</Text>
            <Text style={styles.menuItemPrice}>${item.price}</Text>
          </View>
          <Image source={item.image} style={styles.menuItemImage} />
        </View>
      </TouchableOpacity>
    );
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
        <Carousel
          data={popularItems}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 0.7}
        />
      </View>
    </View>
  );
};

export default Popularjobs;