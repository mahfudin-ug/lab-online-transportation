import React from 'react'
import { View, Text, Image } from 'react-native'

const NavbarIcon = (props) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Image source={props.img} style={{ width: 26, height: 26}} />
      <Text style={{ fontSize: 10, color: props.active ? '#43ab4a' : '#545454'}}>{props.title}</Text>
    </View>
  )
}

export default NavbarIcon
