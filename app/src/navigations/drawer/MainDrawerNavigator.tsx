import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedHomeScreen from '../../screens/FeedHomeScreen';
import MapHomeScreen from '../../screens/MapHomeScreen';

const Drawer = createDrawerNavigator();
function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
