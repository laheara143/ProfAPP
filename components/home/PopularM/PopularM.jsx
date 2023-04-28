import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../../constants';
import PopularjobCard from '../../common/cards/popular/PopularJobCard';
import { popularItems } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';
import { ProductSlider, styles } from './popularjobs.style';
import { BagelMenu, bagelMenuStyles } from './popularjobs.style';

const Popularjobs = () => {
  const [selectedJob, setSelectedJob] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([...popularItems]); // state for sorted items
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    setSelectedJob(item);
  };

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    const newCartItems = [];
    let found = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === item.id) {
        newCartItems.push({ ...item, quantity: cartItems[i].quantity + 1 });
        found = true;
      } else {
        newCartItems.push(cartItems[i]);
      }
    }
    if (!found) {
      newCartItems.push({ ...item, quantity: 1 });
    }
    setCartItems(newCartItems);
  };
  

  const handleSortByPrice = () => {
    const sorted = [...sortedItems].sort((a, b) => a.price - b.price);
    setSortedItems(sorted);
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
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={() => handleAddToCart(item)}
          >
            <Text style={styles.addToCartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
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

      <TouchableOpacity onPress={handleSortByPrice}>
        <Text style={styles.headerBtn}>Sort by Price</Text>
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
        <Carousel
          data={sortedItems}
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
                <Text style={styles.cartItemQuantity}>Quantity: {item.quantity}</Text>
                <Text style={styles.cartItemPrice}>${item.price}</Text>
              </View>
            )}
            
          />
        ) : (
          <Text style={styles.cartTitle}>Your cart is empty</Text>
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
