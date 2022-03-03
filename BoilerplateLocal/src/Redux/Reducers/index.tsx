import {combineReducers} from 'redux';
import {utilityReducer} from './utility.reducer';

export const rootReducer = combineReducers({
  utility: utilityReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
