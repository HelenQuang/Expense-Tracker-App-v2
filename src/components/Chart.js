import React from "react";
import "../UI/Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const totalMax = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
