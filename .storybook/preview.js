import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";
import { withA11y } from "@storybook/addon-a11y";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    defaultValue: "light",
    toolbar: {
      icon: "lightning",
      items: ["dark", "light"],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === "light" ? defaultTheme : darkTheme;
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
  withA11y,
];
