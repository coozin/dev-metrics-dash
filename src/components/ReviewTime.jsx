import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from './charts/LineChart';
import {
  fetchDataAsync,
  selectData,
  selectStartDate,
  selectEndDate,
} from '../reducers/reviewTimeSlice';

const ReviewTime = () => {
  const data = useSelector(selectData);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const dispatch = useDispatch();
  
  console.log('data', data);
  return (
    <>
      <div className="review-time">
        <Button onClick={() => dispatch(
          fetchDataAsync(["pr-review-time"], startDate, endDate)
        )}>
          Get data
        </Button>
        <LineChart data={data}/>
      </div>      
    </>
  );
}

export default ReviewTime;

        