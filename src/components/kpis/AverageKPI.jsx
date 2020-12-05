import React, { useState, useEffect } from 'react';
import KPICard from './KPICard';
import { Skeleton } from '@material-ui/lab';

const AverageKPIs = ({ data }) => {
  const [average, setAverage] = useState(null);

  useEffect(() => {
    if (data) {
      let total = 0;
      const tempArr = data.calculated[0].values.map(item => 
        item.values[0] ? Number(item.values[0].split('s')[0]) : 0
      );

      tempArr.forEach(item => total += item);
      const avg = total / tempArr.length / 3600;
      setAverage(avg.toFixed(2));
    }
  }, [data])

  return (
    <div className="avg-kpi-container">
      {average ?
        <KPICard
          title="Average"
          value={`${average} hours`}
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

export default AverageKPIs;