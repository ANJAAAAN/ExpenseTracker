import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);
//   here datapointsValue consist of arry not a list but max takes list of values so spread operator
//   is used to seperate values from array and make them a stanalone arguments pulled out by spread operator. 
  const totalMaximum = Math.max(...dataPointValue);
  return (
    <div className="chart">
      {/* creating a prop datapoint where the every value of lists are maped to show it in bar mode*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
