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
import { Skeleton } from '@material-ui/lab';
import { Card } from '@material-ui/core';

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
        <Card>
          <ResponsiveContainer height={300} width="99%">
            <LineChart
              data={parsedData}
              margin={{ top: 25, right: 25, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip
                formatter={(value) => value.toFixed(2)}
              />
              <Legend />
              <ReferenceLine y={avgLineVal} label="Avg" stroke="red" />
              <Line type="monotone" dataKey="hours" stroke="#3f51b5" />
            </LineChart>
          </ResponsiveContainer> 
        </Card> :
        <Skeleton
          variant="rect"
          animation="wave"
          height={300}
        />
      }
    </>
  );
}

export default MyLineChart;

        