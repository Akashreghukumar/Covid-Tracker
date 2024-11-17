export interface CovidData {
    state: string;
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
    latitude: number;
    longitude: number;
  }
  
export interface RootState {
    covid: {
      data: CovidData[];
      selectedState: string | null;
    };
  }