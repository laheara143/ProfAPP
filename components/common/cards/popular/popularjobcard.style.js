import { StyleSheet } from "react-native";
import Carousel from 'react-native-snap-carousel';

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: SIZES.h2,
    fontFamily: FONT.medium,
  },
  headerBtn: {
    fontSize: SIZES.body3,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  cardsContainer: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  menuItem: {
    backgroundColor: COLORS.white,
    padding: SIZES.base,
    borderRadius: SIZES.radius,
    marginBottom: SIZES.base, // added margin-bottom
  },
  menuItemName: {
    fontSize: SIZES.h3,
    fontFamily: FONT.bold,
    marginBottom: SIZES.small,
  },
  menuItemDescription: {
    fontSize: SIZES.body4,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    marginBottom: SIZES.small,
  },
  menuItemPrice: {
    fontSize: SIZES.body3,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
});

export default styles;
