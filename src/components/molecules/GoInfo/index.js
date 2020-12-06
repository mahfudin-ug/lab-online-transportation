import React from 'react'
import { View, Text, Image, TouchableOpacity, } from 'react-native'

const GoInfo = () => {
  return (
    <View style={{ padding: 16, paddingBottom: 0 }}>
      <View style={{ height: 15, width: 55, marginLeft: -2 }}>
        <Image source={require('../../../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
      </View>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <View>
          <Image source={require('../../../assets/dummy/facebook-connect.png')} />
        </View>
        <View style={{ marginLeft: 16, flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4a4a4a'}}>Connect with Facebook</Text>
          <Text style={{ fontSize: 15, color: '#4a4a4a', width: '70%'}}>Login faster without verification code</Text>
        </View>
      </View>
      <TouchableOpacity style={{backgroundColor: '#61a756', padding: 11, borderRadius: 4, alignSelf: 'flex-end'}}>
        <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
      </TouchableOpacity>
      <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }}></View>
    </View>
  )
}

export default GoInfo
