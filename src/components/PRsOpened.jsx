import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BarChart from './charts/BarChart';
import {
  fetchDataAsync,
  selectBarData,
  selectStartDate,
  selectEndDate,
} from '../reducers/reviewTimeSlice';
import AvgPRsPerRepo from './kpis/AvgPRsPerRepo';

const PRsOpened = () => {
  const data = useSelector(selectBarData);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const dispatch = useDispatch();

  console.log('pr-opened data', data);
  
  useEffect(() => {
    const metrics = ["pr-opened"];
    dispatch(fetchDataAsync(metrics, startDate, endDate, true));
  }, [dispatch, startDate, endDate]);

  return (
    <>
      <div className="prs-opened-container">
        <div className="prs-opened-chart prs-opened-item">
          <BarChart data={data}/>
        </div>
        <div className="prs-opened-kpi prs-opened-item">
          <AvgPRsPerRepo data={data}/>
        </div>
      </div>  
    </>
  );
}

export default PRsOpened;

        