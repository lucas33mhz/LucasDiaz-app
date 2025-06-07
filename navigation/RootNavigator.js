import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigator from './Navigator';
import Login from '../screens/Login';
import Register from '../screens/Register';




const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const user = useSelector(state => state.authReducer.value.email);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        // Si el usuario está autenticado, muestra el TabNavigator
        <Stack.Screen name="Main" component={Navigator} />
      ) : (
        // Si no está autenticado, muestra Login y Register
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;