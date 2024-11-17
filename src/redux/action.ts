import { FETCH_DATA, FILTER_BY_STATE } from "./actionTypes";

const mockData = {
  states: [
    {
      name: "Maharashtra",
      totalCases: 100000,
      activeCases: 20000,
      recovered: 75000,
      deaths: 5000,
      latitude: 19.7515,
      longitude: 75.7139,
    },
    {
      name: "Kerala",
      totalCases: 50000,
      activeCases: 10000,
      recovered: 38000,
      deaths: 2000,
      latitude: 10.8505,
      longitude: 76.2711,
    },
    {
      name: "Delhi",
      totalCases: 80000,
      activeCases: 15000,
      recovered: 62000,
      deaths: 3000,
      latitude: 28.7041,
      longitude: 77.1025,
    },
  ],
};

export const fetchData = () => {
  return {
    type: FETCH_DATA,
    payload: mockData,
  };
};

export const filterByState = (stateName: string) => {
  return {
    type: FILTER_BY_STATE,
    payload: stateName,
  };
};