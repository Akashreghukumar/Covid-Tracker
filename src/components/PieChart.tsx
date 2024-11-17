import React from "react";
import Plot from "react-plotly.js";

const PieChart = ({ data }: { data: any }) => {
  if (data.length === 0) return null;

  const { activeCases, recovered, deaths } = data[0];

  return (
    <Plot
      data={[
        {
          type: "pie",
          values: [activeCases, recovered, deaths],
          labels: ["Active", "Recovered", "Deaths"],
        },
      ]}
      layout={{ title: "COVID-19 Case Distribution" }}
    />
  );
};

export default PieChart;
