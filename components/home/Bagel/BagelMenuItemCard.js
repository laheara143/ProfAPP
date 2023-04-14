import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS } from '../../../constants';
import styles from '../nearby/nearbyjobs.style';

const BagelMenuItemCard = ({menuItem, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <Image style={styles.image} source={{uri: menuItem.image}}/>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{menuItem.name}</Text>
        <Text style={styles.price}>{menuItem.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default BagelMenuItemCard;
