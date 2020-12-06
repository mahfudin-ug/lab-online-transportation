import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import ScrollableItem from '../../../components/molecules/ScrollableItem'

const ScrollableProducts = () => {
  return (
    <View style={{ padding: 16}}>
        <View style={{ height: 15, width: 55 }}>
          <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c'}}>Nearby Restaurant</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
        </View>
        <ScrollView horizontal style={{marginHorizontal: -16, paddingLeft: 16}}>
          <ScrollableItem title="Sederhana Minang" img={require('../../../assets/dummy/go-food-kfc.jpg')} />
          <ScrollableItem title="Bakmi GM Aeon Mall" img={require('../../../assets/dummy/go-food-gm.jpg')} />
          <ScrollableItem title="Martabak Orins" img={require('../../../assets/dummy/go-food-orins.jpg')} />
          <ScrollableItem title="Martabak Banka" img={require('../../../assets/dummy/go-food-banka.jpg')} />
          <ScrollableItem title="Ayam Bakar Pak Boss" img={require('../../../assets/dummy/go-food-pak-boss.jpg')} />
        </ScrollView>
        
        <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }}></View>
      </View>
  )
}

export default ScrollableProducts
