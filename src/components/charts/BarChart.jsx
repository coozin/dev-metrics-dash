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
import { Skeleton } from '@material-ui/lab';
import { Card } from '@material-ui/core';

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
        <Card>
          <ResponsiveContainer height={300} width="99%">
            <BarChart
              data={parsedData}
              margin={{ top: 25, right: 25, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="repo" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="PRs" fill="#3f51b5" />
            </BarChart>
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

export default MyBarChart;

        