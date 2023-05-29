import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MainText, TransactionList } from "@Components";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import Icon from "@expo/vector-icons/FontAwesome5";

export const options: DrawerNavigationOptions = {
  headerTitle: "Home",
  drawerIcon: (props) => <Icon name="home" {...props} />,
};

function Tex({}) {
  return <MainText>Nothing to see here mate</MainText>;
}

export function Component({ navigation, route }) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarContentContainerStyle: {
          borderTopWidth: 0,
          shadowColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Transactions" component={TransactionList} options={{}} />
      <Tab.Screen name="Transfers" component={Tex} />
    </Tab.Navigator>
  );
}
