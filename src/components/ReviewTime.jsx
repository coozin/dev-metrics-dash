import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from './charts/LineChart';
import {
  fetchDataAsync,
  selectLineData,
  selectStartDate,
  selectEndDate,
} from '../reducers/reviewTimeSlice';
import AverageKPI from './kpis/AverageKPI';

const ReviewTime = () => {
  const data = useSelector(selectLineData);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const dispatch = useDispatch();

  console.log('pr-review-time data', data);
  
  useEffect(() => {
    const metrics = ["pr-review-time"];

    dispatch(fetchDataAsync(metrics, startDate, endDate));
  }, [dispatch, startDate, endDate]);

  return (
    <>
      <div className="review-time-container">
        <div className="review-time-chart review-time-item">
          <LineChart data={data}/>
        </div>
        <div className="review-time-kpi review-time-item">
          <AverageKPI data={data}/>
        </div>
      </div>      
    </>
  );
}

export default ReviewTime;

        