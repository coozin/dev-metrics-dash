import React, { useState, useEffect } from 'react';
import KPICard from './KPICard';
import { Skeleton } from '@material-ui/lab';

const AvgPRsPerRepo = ({ data }) => {
  const [average, setAverage] = useState(null);

  useEffect(() => {
    if (data) {      
      const parsedData = data.calculated.map(item => {
        let total = 0;
        const tempArrNumberOfPRs = item.values.map(
          item => item.values[0] ? item.values[0] : 0
        );
        tempArrNumberOfPRs.forEach(item => total += item);
        return {
          subtotal: total,
        }
      })
      let finalTotal = 0;
      parsedData.forEach(item => finalTotal += item.subtotal)
      const avg = finalTotal / parsedData.length;
      setAverage(avg.toFixed(2));
    }
  }, [data])

  return (
    <div className="avg-kpi-container">
      {average ?
        <KPICard
          title="Average"
          value={`${average} PRs/repo`}
        /> :
        <Skeleton
          variant="rect"
          animation="wave"
          height={100}
        />
      }
    </div>
  );
}

export default AvgPRsPerRepo;