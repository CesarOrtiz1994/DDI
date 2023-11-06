import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rm from "../../../api/rm";
import FavotiteScreen from "../../../screen/FavotiteScreen";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from './TabNavigation.styles'
import StackNavigation from "../StackNavigation/StackNavigation";
import StackAccount from "../StackNavigation/StackAccount";

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
    
  return (
    <Tab.Navigator
      initialRouteName="StackNavigation"
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      })} >
        <Tab.Screen
        name="Account"
        component={StackAccount}
        options={{
          title: "Mi cuenta",
          headerShown: false,
          headerTransparent: true,
        }}
      />
      <Tab.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={{
          title: "",
          tabBarIcon: () => <Image source={require('../../../assets/img/icono.png')} />,
          headerShown: false,
          headerTransparent: true,
          tabBarLabel: ""

        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavotiteScreen}
        options={{
          title: "Favoritos",
          headerShown: false,
          headerTransparent: true
        }}
      />
      {/* <Tab.Screen
        name="Settings"
        component={Configuracion}
        options={{
          title: "Configuración",
        }}
      /> */}
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#6E6E6E';
  if (route.name === 'Home') {
    // iconName = 'home';
    }
    if (route.name === 'Settings') {
    iconName = 'cog';
    }
    if (route.name === 'Favorites') {
    iconName = 'heart';
    }
    if (route.name === 'Account') {
    iconName = 'user';
    }
    if (routeStatus.focused) {
    color = '#70d208';
    }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />
  }
