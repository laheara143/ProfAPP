import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions  } from 'react-native';
import styles from './AllDay.style';
import { allDayMenu } from '../Menu/menuData';
import Carousel from 'react-native-snap-carousel';

const AllDay = () => {
  const [cartItems, setCartItems] = useState([]);
  const [sortedItems, setSortedItems] = useState([...allDayMenu]);
  const [sortOrder, setSortOrder] = useState('asc');


  //Big O (O(n))
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

  //Big O (O(n2))
  const handleSortByPrice = () => {
    const sorted = [];
    for (let i = 0; i < allDayMenu.length; i++) {
      let item = allDayMenu[i];
      let inserted = false;
      for (let j = 0; j < sorted.length; j++) {
        if ((sortOrder === 'asc' && item.price < sorted[j].price) || (sortOrder === 'desc' && item.price > sorted[j].price)) {
          sorted.splice(j, 0, item);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        sorted.push(item);
      }
    }
    setSortedItems(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  //Big O (O(n))
const handleRemoveFromCart = (item) => {
  console.log(`Removed ${item.name} from cart`);
  const newCartItems = [];
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id !== item.id) {
      newCartItems.push(cartItems[i]);
    }
  }
  setCartItems(newCartItems);
};

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.6}>
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
  
      <View style={{ position: 'relative', flex: 1 }}>
      <View style={styles.cartWrapper}>
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Cart</Text>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemQuantity}>Q: {item.quantity}</Text>
              <Text style={styles.cartItemPrice}>${item.price}</Text>
              <TouchableOpacity
              style={styles.removeFromCartButton}
              onPress={() => handleRemoveFromCart(item)}
              >
        <Text style={styles.removeFromCartButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
            )}
            
          />
        ) : (
          <Text style={styles.cartTitle}>Your cart is empty</Text>
        )}
      </View>
    </View>
    </View>
    </View>
  );
  
};

export default AllDay;
