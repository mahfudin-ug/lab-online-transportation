import React from 'react';
import {
  StatusBar
} from 'react-native';
import Router from './src/config/router';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <Router />
    </>
  );
};

export default App;
