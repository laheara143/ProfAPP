import * as fonts from "expo-font";


const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",
  black: "#000000",

  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#6d6c7a",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",
  whiteSmoke: "#F5F5F5",

  tan: "#e5decc",

  complimentary: "#5B6F8C",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
//Add font in here
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
