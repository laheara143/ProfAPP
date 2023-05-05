import { StyleSheet, } from 'react-native';
import { FONT, SIZES, COLORS } from "../../../constants";


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
  addToCartButton: {
    backgroundColor: COLORS.complimentary,
    borderRadius: SIZES.radius,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    marginTop: SIZES.small,
  },
  addToCartButtonText: {
    color: COLORS.white,
    fontSize: SIZES.body3,
    fontFamily: FONT.medium,
    textAlign: 'center',
  },
  cartContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.padding,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
  },
  cartTitle:{
    fontSize: 20,
    fontWeight: "bold",
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartItemQuantity: {
    fontSize: 14,
    color: "#777",
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartWrapper: { //Does not work
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default styles;