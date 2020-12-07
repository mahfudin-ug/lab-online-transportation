import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const GoNews = ({ onPress }) => {
  return (
    <View style={{ paddingTop: 16, paddingHorizontal: 16}}>
      <View>
        <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{ height: 171, width: '100%', borderRadius: 6 }} />
        <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
        <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
          <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
        </View>
      </View>
      <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
        <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7a7a7a', marginBottom: 10 }}>Dimas Draja selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
        <TouchableOpacity onPress={onPress} style={{backgroundColor: '#61a756', padding: 11, alignSelf: 'flex-end', borderRadius: 4}}>
          <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default GoNews
