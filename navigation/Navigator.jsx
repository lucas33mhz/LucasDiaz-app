
// AppNavigator.js

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import Detalle from "../screens/Detalle";
import Carrito from '../screens/Carrito';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tabs dentro del stack
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Carrito') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Carrito" component={Carrito} />
    </Tab.Navigator>
  );
}

// Stack principal que contiene el tab y Detalle
export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="E-Comerce" component={TabNavigator} options={{ headerShown: true }} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}



