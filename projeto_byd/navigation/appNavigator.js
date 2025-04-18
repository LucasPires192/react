import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ModelScreen from '../screens/ModelScreen';
import GalleryScreen from '../screens/GalleryScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Modelos') {
            iconName = focused ? 'car' : 'car-outline';
          } else if (route.name === 'Galeria') {
            iconName = focused ? 'images' : 'images-outline';
          } else if (route.name === 'Contato') {
            iconName = focused ? 'mail' : 'mail-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ececec',
        tabBarInactiveTintColor: '#ececec',
        headerShown: false,
        tabBarActiveBackgroundColor: '#535559',
        tabBarInactiveBackgroundColor: '#303133',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sobre" component={AboutScreen} />
      <Tab.Screen name="Modelos" component={ModelScreen} />
      <Tab.Screen name="Galeria" component={GalleryScreen} />
      <Tab.Screen name="Contato" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;