import React from 'react';
import { View, Text, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';

import HomeScreen from './src/screens/HomeScreen';
import RegionalScreen from './src/screens/RegionalScreen';
import NumerologyScreen from './src/screens/NumerologyScreen';
import NameDetails from './src/screens/NameDetailsScreen';
import API from './src/API/API';
import BirthStarScreen from './src/screens/BirthStarScreen';

const App = () => {
  return (
    <BirthStarScreen />
  );
};

export default App;
