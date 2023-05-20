import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { ComponentType } from "react";
import * as Home from "./Home";
import { DrawerProps } from "@react-navigation/drawer/lib/typescript/src/types";

interface screen {
  name: string;
  Component: ComponentType<DrawerProps & any>;
  options?: DrawerNavigationOptions;
}

export const screens: screen[] = [
  {
    name: "Homie", ...Home
  },
];
