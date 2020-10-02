import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, Reducers);


const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store)
  return {store, persistor};
};

export default configureStore;
