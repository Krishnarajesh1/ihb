import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import RegionalScreen from '../screens/RegionalScreen';
import NumerologyScreen from '../screens/NumerologyScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Regional" component={RegionalScreen} />
      <Drawer.Screen name="Numerology" component={NumerologyScreen} />

    </Drawer.Navigator>
  );
}

export default MyDrawer;