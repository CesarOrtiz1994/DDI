import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../../screen/HomeScreen";
import FavotiteScreen from "../../../screen/FavotiteScreen";
import Configuracion from "../../../screen/Configuracion";
import MiCuenta from "../../../screen/MiCuenta";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { styles } from './TabNavigation.styles'

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
    
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
      })} >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavotiteScreen}
        options={{
          title: "Favoritos",
        }}
      />
      <Tab.Screen
        name="Account"
        component={MiCuenta}
        options={{
          title: "Mi cuenta",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Configuracion}
        options={{
          title: "Configuración",
        }}
      />
    </Tab.Navigator>
  );
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#6E6E6E';
  if (route.name === 'Home') {
    iconName = 'home';
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
    color = '#00B0FF';
    }

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />
  }
