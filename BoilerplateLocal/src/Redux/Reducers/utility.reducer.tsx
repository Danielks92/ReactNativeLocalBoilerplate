
import {
  FetchActionTypes,
  FETCH_REQUEST
} from '../Types';

interface UtilityState {
  people: any[];
}

const initialState: UtilityState = {
  people: [],
};

export function utilityReducer(
  state: UtilityState = initialState,
  action: FetchActionTypes,
): UtilityState {
  switch (action.type) {
    case FETCH_REQUEST: {
      return state;
    }
    default: {
      return state;
    }
  }
}
