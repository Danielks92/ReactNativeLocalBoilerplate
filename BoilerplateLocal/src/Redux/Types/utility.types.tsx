import {ImageSourcePropType} from 'react-native';

export interface ImgInterface {
  source: ImageSourcePropType;
  aspect: 'square' | 'portrait' | 'landscape';
}

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';

export const UPDATE_DATA = 'UPDATE_DATA';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
export const UPDATE_DATA_FAILED = 'UPDATE_DATA_FAILED';

export const ADD_DATA = 'ADD_DATA';
export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';
export const ADD_DATA_FAILED = 'ADD_DATA_FAILED';

interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
  payload: any;
}

export type FetchActionTypes = FetchRequestAction | FetchFailureAction;
