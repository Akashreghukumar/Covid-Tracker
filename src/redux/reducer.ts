import { FETCH_DATA, FILTER_BY_STATE } from "./actionTypes";

const initialState = {
  data: [],
  filteredData: [],
};

const covidReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload.states, filteredData: action.payload.states };
    case FILTER_BY_STATE:
      return {
        ...state,
        filteredData: state.data.filter((state: any) => state.name === action.payload),
      };
    default:
      return state;
  }
};

export default covidReducer;
