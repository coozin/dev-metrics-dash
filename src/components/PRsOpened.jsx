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
      <div className="review-time">
        <BarChart data={data}/>
        <AvgPRsPerRepo data={data}/>
      </div>      
    </>
  );
}

export default PRsOpened;

        