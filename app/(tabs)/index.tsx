import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import SampelComponent from './SampelComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <MateriFlexBox />
        <PositionReactNative />
        <SampelComponent />
        <StylingReactNativeComponent />
      </ScrollView>
    </View>
  );
};


export default App;
