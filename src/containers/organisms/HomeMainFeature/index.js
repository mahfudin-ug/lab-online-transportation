import React from 'react'
import { View, Text } from 'react-native'
import MainFeature from '../../../components/molecules/MainFeature/index';

const HomeMainFeature = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 18 }}>
      <MainFeature title="GO-RIDE" img={require('../../../assets/icon/go-ride.png')} />
      <MainFeature title="GO-CAR" img={require('../../../assets/icon/go-car.png')} />
      <MainFeature title="GO-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')} />
      <MainFeature title="GO-SEND" img={require('../../../assets/icon/go-send.png')} />
      <MainFeature title="GO-DEALS" img={require('../../../assets/icon/go-deals.png')} />
      <MainFeature title="GO-PULSA" img={require('../../../assets/icon/go-pulsa.png')} />
      <MainFeature title="GO-FOOD" img={require('../../../assets/icon/go-food.png')} />
      <MainFeature title="MORE" img={require('../../../assets/icon/go-more.png')} />
    </View>
  )
}

export default HomeMainFeature
