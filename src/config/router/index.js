import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, NewsDetail, OrderDetail, Orders, ScanQRCode } from '../../containers/pages';

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="ScanQRCode">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="ScanQRCode" component={ScanQRCode} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  )
}

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        <Stack.Screen name="OrderStack" component={OrderStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router