import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions  } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import { allDayMenu } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';


const Nearbyjobs = () => {
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {

  };

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
        <Text style={styles.headerTitle}>All Day Menu</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <Carousel
          data={allDayMenu}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * 0.7}
        />
      </View>
    </View>
  );
};

export default Nearbyjobs;


