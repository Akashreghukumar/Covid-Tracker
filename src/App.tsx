import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, filterByState } from "./redux/action";
import Filter from "./components/Filter";
import PieChart from "./components/PieChart";
import MapView from "./components/MapView";
import LineChart from "./components/LineChart";
import 'leaflet/dist/leaflet.css';
import './index.css'

const App = () => {
  const dispatch = useDispatch();
  const { filteredData } = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>COVID-19 Tracker</h1>
      <Filter onFilter={(state) => dispatch(filterByState(state))} />
    <div>
      <PieChart data={filteredData} />
      <LineChart data={filteredData} />
    </div>
      <div style={{height:"500px",width:"500px"}}>
       <MapView data={filteredData} />
      </div>
    </div>
  );
};

export default App;
