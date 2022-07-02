import { blue, neutral, text, green, red, yellow } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: blue[300],
  primaryHoverColor: blue[200],
  primaryActiveColor: blue[100],
  primaryDisabledColor: neutral[400],
  textColorOnPrimary: text.simple,
  textColor: text.simple,
  textColorInverted: text.inverted,
  primaryFont,
  formElementBackground: neutral[100],
  textOnFormElementBackground: text.inverted,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[200],
  primaryHoverColor: neutral[300],
  primaryActiveColor: neutral[300],
  primaryDisabledColor: neutral[400],
  textColorOnPrimary: text.inverted,
  textColor: text.inverted,
  textColorInverted: text.simple,
  primaryFont,
  formElementBackground: neutral[600],
  textOnFormElementBackground: text.simple,
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
