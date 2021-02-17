import { combineReducers } from "redux";
import InitialState from "./initialState";

export const campaigns = (state = InitialState, action) => {
  switch (action.type) {
    case "UPDATE_CAMPAIGNS":
      return { ...state, campaignList: action.payload };
    case "CLEAR_CAMPAIGNS":
      return [];
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
      case "SET_LOADING":
      return { ...state, filterForm: {
        searchBy: action.payload,
        searchKey: state.filterForm.searchKey
      } };
    default:
      return state;
  }
};

export const reducers = combineReducers({ campaigns });
