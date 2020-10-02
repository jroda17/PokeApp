import {AppRegistry} from 'react-native';
import React from 'react';
import App from './source/App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from './source/redux/store'

let configuredStore = configureStore();

const Index = () => {
  return (
    <Provider store={configuredStore.store}>
      <PersistGate loading={null} persistor={configuredStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Index);
