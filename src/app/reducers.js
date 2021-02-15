import { combineReducers} from 'redux';

export const repos = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_REPOS':
        return action.repos;
      case 'CLEAR_REPOS':
        return [];
      default:
        return state;
    }
  };
  
  export const reducers = combineReducers({ repos });