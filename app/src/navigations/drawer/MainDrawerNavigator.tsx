import {createDrawerNavigator} from '@react-navigation/drawer';
import CalendarHomeScreen from '../../screens/CalendarHomeScreen';
import FeedHomeScreen from '../../screens/FeedHomeScreen';
import MapHomeScreen from '../../screens/MapHomeScreen';

const Drawer = createDrawerNavigator();
function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
