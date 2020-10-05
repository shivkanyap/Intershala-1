import { FETCH_USER } from '../actions/types';
import { LOGOUT_USER } from '../actions/types';
import { SET_AUTHENTICATED } from '../actions/types'


const initialState = {
  currentUser: {},
  isAuthenticated:false
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated:action.payload
      }
    
    default:
      return state;
  }
}
