import {StackScreenProps} from '@react-navigation/stack';
import {Button, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {authNavigations} from '../constants';
import {AuthStackParamList} from '../navigations/AuthStackNavigator';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
export default AuthHomeScreen;
