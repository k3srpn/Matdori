import {createStackNavigator} from '@react-navigation/stack';
import {authNavigations} from '../../constants';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';

export type AuthStackParamList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();
function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
