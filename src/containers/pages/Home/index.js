import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
} from 'react-native';

import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GoInfo from '../../../components/molecules/GoInfo'; 
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import Navbar from '../../../containers/organisms/Navbar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
          <SearchFeature />
          <HomeGoPay navigation={navigation} />
          <HomeMainFeature />
          <View style={{ height: 17, backgroundColor: '#f2f2f2', marginTop: 21}} />
          <GoNews onPress={() => navigation.navigate('NewsDetail')} />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>

        <Navbar navigation={navigation} />
      </View>
    </>
  )
}

export default Home
