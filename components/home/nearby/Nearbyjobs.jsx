import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions  } from 'react-native';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import styles from './nearbyjobs.style';
import { allDayMenu } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';

const Nearbyjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const [cartItems, setCartItems] = useState([]);

  const handleCardPress = (item) => {

  };

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    const newCartItems = [];
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        newCartItems.push({...item, quantity: cartItems[i].quantity + 1});
        found = true;
      } else {
        newCartItems.push(cartItems[i]);
      }
    }
    if (!found) {
      newCartItems.push({...item, quantity: 1});
    }
    setCartItems(newCartItems);
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
          <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Add to cart</Text>
          </TouchableOpacity>
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
  
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart</Text>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.cartItemName}>{item.name}</Text>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.cartEmpty}>Your cart is empty</Text>
        )}
      </View>
    </View>
  );
  
};

export default Nearbyjobs;
