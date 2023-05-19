import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { ComponentType, ReactComponentElement } from "react";
import { Home } from "./Home";
import { DrawerProps } from "@react-navigation/drawer/lib/typescript/src/types";

interface screen {
  name: string;
  component: ComponentType<DrawerProps & any>;
  options?: DrawerNavigationOptions;
}

export const screens: screen[] = [
  {
    name: "Home",
    component: Home,
  },
];
