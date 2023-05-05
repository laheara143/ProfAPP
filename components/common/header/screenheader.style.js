import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 47,
    height: 40,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: () => ({
    width: 80,
    height: 80,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
