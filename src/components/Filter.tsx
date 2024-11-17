import React from "react";

const Filter = ({ onFilter }: { onFilter: (state: string) => void }) => {
  const states = ["Maharashtra", "Kerala", "Delhi"];

  return (
    <select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All States</option>
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};

export default Filter;
