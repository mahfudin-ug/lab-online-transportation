import React from 'react'
import { View, Text } from 'react-native'
import NavbarIcon from '../../../components/molecules/NavbarIcon'

const Navbar = ({ navigation }) => {
  
  return (
    <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
      <NavbarIcon title="Home" onPress={() => navigation.replace('HomeStack')} img={require('../../../assets/icon/home-active.png')} active />
      <NavbarIcon title="Orders" onPress={() => navigation.replace('OrderStack')} img={require('../../../assets/icon/order.png')} />
      <NavbarIcon title="Help" img={require('../../../assets/icon/help.png')} />
      <NavbarIcon title="Inbox" img={require('../../../assets/icon/inbox.png')} />
      <NavbarIcon title="Account" img={require('../../../assets/icon/account.png')} />
    </View>
  )
}

export default Navbar
