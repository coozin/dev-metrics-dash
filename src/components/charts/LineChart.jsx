import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const MyLineChart = ({data}) => {
  const [parsedData, setParsedData] = useState(null)
  const [avgLineVal, setAvgLineVal] = useState(0)
  console.log('LineChart data', data);
  useEffect(() => {
    if (data) {
      const parsedDataTemp = data.calculated[0].values.map(
        item => ({
          date: item.date,
          hours: item.values[0] ? Number(item.values[0].split('s')[0]) / 3600 : 0,
        }));
      console.log('*J* parsedDataTemp', parsedDataTemp)
      const avgTempArr = parsedDataTemp.map(item => item.hours);
      let total = 0;
      avgTempArr.forEach(item => total += item);
      const avg = total / avgTempArr.length;
      setParsedData(parsedDataTemp);
      setAvgLineVal(avg);
    }
  }, [data])
  return (
    <>
      {data ?
        <ResponsiveContainer height={300} width="100%">
          <LineChart
            width={730}
            height={300}
            data={parsedData}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={avgLineVal} label="Avg" stroke="red" />
            <Line type="monotone" dataKey="hours" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer> :
        <div>loading...</div>
      }
    </>
  );
}

export default MyLineChart;

        