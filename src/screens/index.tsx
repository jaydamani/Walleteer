import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { DrawerProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { ComponentType } from 'react';

import * as Home from './Home';

interface Screen {
  name: string;
  Component: ComponentType<DrawerProps & any>;
  options?: DrawerNavigationOptions;
}

export const screens: Screen[] = [
  {
    name: 'Home',
    ...Home,
  },
  {
    name: 'Nothing',
    Component: () => <></>,
  },
];
