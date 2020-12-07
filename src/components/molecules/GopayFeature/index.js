import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GopayFeature = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ flex: 1, alignItems: 'center'}}>
      <Image source={props.img} />
      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}}>{props.title}</Text>
    </TouchableOpacity>
  )
}
export default GopayFeature
