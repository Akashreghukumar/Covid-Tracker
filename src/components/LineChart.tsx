import React from "react";
import Plot from "react-plotly.js";

const LineChart = ({ data }: { data: any }) => {
  if (data.length === 0) return null;

  const state = data[0];

  return (
    <Plot
      data={[
        { x: ["Total Cases"], y: [state.totalCases], type: "bar", name: "Total Cases" },
        { x: ["Active Cases"], y: [state.activeCases], type: "bar", name: "Active Cases" },
        { x: ["Recovered"], y: [state.recovered], type: "bar", name: "Recovered" },
        { x: ["Deaths"], y: [state.deaths], type: "bar", name: "Deaths" },
      ]}
      layout={{ title: `COVID-19 Data for ${state.name}` }}
    />
  );
};

export default LineChart;
