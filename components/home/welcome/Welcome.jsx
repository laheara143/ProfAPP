import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Menu from '../Menu/Menu';
import { COLORS, icons, SIZES, FONT } from '../../../constants';
import styles from './welcome.style';

const foodTypes = ["Bagels", "Breakfast Sandwiches","Beverages", "Lunch Sandwiches", "Salads","Cream Cheese"];

const Welcome = () => {
  const router = useRouter();
  const [activeFoodType, setActiveFoodType] = useState('Bagels');

  return (
    <View>
      <View style={buttonStyles.btnContainer}>
        <Text 
        style={buttonStyles.btnContainer}>
        Family Owned - Breakfast - Friendly</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Looking for something specific?"
            placeholderTextColor="grey"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={foodTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeFoodType, item)}
              onPress={() => {
                setActiveFoodType(item);
              }}
            >
              <Text style={styles.tabText(activeFoodType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

      <View style={styles.menuContainer}>
        <Menu foodType={activeFoodType} />
      </View>
    </View>
  );
};

const buttonStyles = StyleSheet.create({
  btnContainer: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    marginTop: SIZES.small,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: FONT.bold,
    //Change Font Style of FAmily Owned....
  },
});


export default Welcome;
