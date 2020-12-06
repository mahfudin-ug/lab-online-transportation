import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import GoNews from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoInfo from './src/components/molecules/GoInfo'; 
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import Navbar from './src/containers/organisms/Navbar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
          <SearchFeature />
          <HomeGoPay />
          <HomeMainFeature />
          <View style={{ height: 17, backgroundColor: '#f2f2f2', marginTop: 21}} />
          <GoNews />
          <GoInfo />
          <GoBanner />
          <ScrollableProducts />
        </ScrollView>

        <Navbar />
      </View>
    </>
  );
};

export default App;
