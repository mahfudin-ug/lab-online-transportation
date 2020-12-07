import React from 'react'
import { View, Text, Button } from 'react-native'
import Navbar from '../../organisms/Navbar'

const Orders = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Orders page</Text>
        <Button title="Order Detail" onPress={() => navigation.navigate('OrderDetail')} />
      </View>
      <Navbar navigation={navigation} />
    </View>
  )
}

export default Orders
