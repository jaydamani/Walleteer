import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { Platform } from "react-native";
import {
  MD3DarkTheme,
  configureFonts,
  MD3LightTheme,
  adaptNavigationTheme,
  MD3Theme,
} from "react-native-paper";
import { MD3Type } from "react-native-paper/lib/typescript/src/types";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const fontConfig: Partial<MD3Type> = {
  fontFamily: Platform.select({
    web: 'Roboto, "Helvetica Neue", Arial, sans-serif',
    ios: "System",
    default: "sans-serif",
  }),
};

type theme = MD3Theme;
export const CombinedLightTheme: theme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
  fonts: configureFonts({
    config: fontConfig,
    isV3: true,
  }),
};
export const CombinedDarkTheme: theme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
  fonts: configureFonts({
    config: fontConfig,
    isV3: true,
  }),
};
