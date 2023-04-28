import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Menu, { menuData } from '../Menu/Menu';
import { COLORS, icons, SIZES, FONT } from '../../../constants';
import styles from './welcome.style';
import { foodTypes } from '../Menu/menuData'; // import foodTypes from menuData


const Welcome = () => {
  const router = useRouter();
  const [activeFoodType, setActiveFoodType] = useState('Bagels');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(menuData);

  const handleSearch = () => {
    const newData = menuData.filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(newData);
  };

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
  value={searchValue}
  onChangeText={text => setSearchValue(text)}
  placeholder="Looking for something specific?"
  placeholderTextColor="grey"
/>

        </View>

      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={foodTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeFoodType, item)}
              onPress={() => {
                setActiveFoodType(item);
                const newData = menuData.filter(menuItem => menuItem.foodType === item);
                setFilteredData(newData);
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
        <Menu foodType={activeFoodType} data={filteredData} />
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
