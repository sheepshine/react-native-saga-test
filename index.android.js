import React, { Component } from 'react';
import {AppRegistry} from 'react-native'
import { Provider } from 'react-redux';
import configStore from './src/store/index';
import App from './app';

const store = configStore();

const flight = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

AppRegistry.registerComponent('flight', () => flight);

// 关闭全部的警告
console.disableYellowBox = true;
