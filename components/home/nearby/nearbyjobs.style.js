import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { popularitems } from '../Menu/menuData';
import { FONT, SIZES, COLORS } from "../../../constants";

export const BagelMenu = () => {

  const renderMenuItem = ({ item, index }) => {
    return (
      <View style={styles.menuItem}>
        <Image style={styles.menuItemImage} source={{ uri: item.image }} />
        <View style={styles.menuItemDetails}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <Text style={styles.menuItemPrice}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Menu</Text>
      <Carousel
        data={popularitems}
        renderItem={renderMenuItem}
        sliderWidth={Dimensions.get('window').width * 0.7}//Does not change distance of slider items
        itemWidth={Dimensions.get('window').width * 0.7}
        activeSlideAlignment="center"
        carouselContainerStyle={styles.carouselContainer}
        contentContainerStyle={styles.carouselContent}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.medium,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray3,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  menuItem: {
    width: "50%",
    marginVertical: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  menuItemImage: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  menuItemDetails: {
    padding: SIZES.small,
  },
  menuItemName: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.body3,
    color: COLORS.darkGray,
  },
  menuItemDescription: {
    fontFamily: FONT.regular,
    fontSize: SIZES.body4,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  menuItemPrice: {
    fontFamily: FONT.medium,
    fontSize: SIZES.body3,
    color: COLORS.primary,
    marginTop: SIZES.small,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselContent: {
    alignItems: 'center',
  },
});
  

export default styles;
