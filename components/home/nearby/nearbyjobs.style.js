import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
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
    width: "48%",
    marginVertical: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    elevation: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
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
  menuItemImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
});
  

export default styles;
