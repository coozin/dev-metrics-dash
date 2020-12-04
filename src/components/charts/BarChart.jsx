import React, { useState, useEffect } from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

const MyBarChart = ({ data }) => {
  const [parsedData, setParsedData] = useState(null)
  console.log('LineChart data', data);
  useEffect(() => {
    if (data) {
      const parsedDataTemp = data.calculated[0].values.map(item => ({
          date: item.date,
          number: item.values[0] ? item.values[0] : 0,
        }));
      console.log('*J* parsedDataTemp', parsedDataTemp)
      setParsedData(parsedDataTemp)
    }
  }, [data])
  return (
    <>
      {data ?
        <BarChart
          width={500}
          height={300}
          data={parsedData}
          margin={{
            top: 5, right: 5, left: 5, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#8884d8" />
        </BarChart> :
        <div>loading...</div>
      }
    </>
  );
}

export default MyBarChart;

        