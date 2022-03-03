import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './Reducers';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'reducer',
  storage: AsyncStorage,
};
const presistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
const persistor = persistStore(store);
export {persistor, store};
