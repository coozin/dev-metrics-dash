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
          number: total,
        }
      })
      
      console.log('*J* parsedDataTemp', parsedDataTemp)
      setParsedData(parsedDataTemp)
    }
  }, [data])
  return (
    <>
      {data ?
        <BarChart
          width={730}
          height={300}
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
          <Bar dataKey="number" fill="#8884d8" />
        </BarChart> :
        <div>loading...</div>
      }
    </>
  );
}

export default MyBarChart;

        