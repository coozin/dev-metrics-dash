import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from './charts/LineChart';
import {
  fetchDataAsync,
  selectLineData,
  selectStartDate,
  selectEndDate,
} from '../reducers/reviewTimeSlice';

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
      <div className="review-time">
        <LineChart data={data}/>
      </div>      
    </>
  );
}

export default ReviewTime;

        