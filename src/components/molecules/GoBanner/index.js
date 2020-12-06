import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoBanner = () => {
  return (
    <View style={{ padding: 16, paddingBottom: 0 }}>
      <View>
        <Image source={require('../../../assets/dummy/food-banner.jpg')} style={{ height: 171, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'rgba(0,0,0, 0.4)', borderRadius: 6}}></View>
        <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
          <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginBottom: 16 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>Free GO-FOOD Voucher</Text>
            <Text style={{ fontSize: 12, color: 'white' }}>Quick, before they run out</Text>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61a756', padding: 11, borderRadius: 4}}>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }}></View>
    </View>
  )
}

export default GoBanner
