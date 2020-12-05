import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
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
  console.log('BarChart data', data);
  useEffect(() => {
    if (data) {
      const parsedDataTemp = data.calculated.map(item => {
        let total = 0;
        const tempArrNumberOfPRs = item.values.map(
          item => item.values[0] ? item.values[0] : 0
        );
        tempArrNumberOfPRs.forEach(item => total += item);
        return {
          repo: item.for.repositories[0].split('/')[2],
          PRs: total,
        }
      })
      
      console.log('*J* parsedDataTemp', parsedDataTemp)
      setParsedData(parsedDataTemp)
    }
  }, [data])
  return (
    <>
      {data ?
        <ResponsiveContainer height={300} width="99%">
          <BarChart
            data={parsedData}
            margin={{
              top: 5, right: 5, left: 5, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="repo" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="PRs" fill="#3f51b5" />
          </BarChart>
        </ResponsiveContainer> :
        <div>loading...</div>
      }
    </>
  );
}

export default MyBarChart;

        