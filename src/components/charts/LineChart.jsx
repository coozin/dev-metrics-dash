import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const MyLineChart = ({data}) => {
  const [parsedData, setParsedData] = useState(null)
  console.log('LineChart data', data);
  useEffect(() => {
    if (data) {
      const parsedDataTemp = data.calculated[0].values.map(item => ({
          date: item.date,
          hours: item.values[0] ? Number(item.values[0].split('s')[0]) / 3600 : 0,
        }));
      console.log('*J* parsedDataTemp', parsedDataTemp)
      setParsedData(parsedDataTemp)
    }
  }, [data])
  return (
    <>
      {data ?
        <LineChart width={730} height={250} data={parsedData}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="hours" stroke="#8884d8" />
        </LineChart> :
        <div>loading...</div>
      }
      
    </>
  );
}

export default MyLineChart;

        