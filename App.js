import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import LoginScreen from'./src/screens/LogginScreen'
import Home from './src/screens/HomeScreen';
import NuevaOrden from './src/screens/NuevaOrden';
import Menu from './src/screens/MenuScreen';
// state context
import FirebaseState from './src/Services/context/firebase/firebaseState'
import PedidoState from './src/Services/context/pedidos/pedidosState'
import ReservaState from './src/Services/context/reserva/reservaState'

const Stack = createNativeStackNavigator();

export default function App() {

  const image = {
    uri: "https://i.pinimg.com/originals/a0/bd/96/a0bd96889b1c5e10d8a237ecd5a20c45.jpg",
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <>
    <FirebaseState>

    <PedidoState>
      <ReservaState>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Login" options={{headerShown:false}} component={LoginScreen}/>
        <Stack.Screen name ="Home" options={{headerShown:false}} component={Home}/>
        <Stack.Screen name ="NuevaOrden"  component={NuevaOrden}/>
        <Stack.Screen name ="Menu"  component={Menu}/>

      </Stack.Navigator>
    </NavigationContainer>
      </ReservaState>
    </PedidoState>
    </FirebaseState>
    </>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
