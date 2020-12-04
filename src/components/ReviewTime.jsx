import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import LineChart from './charts/LineChart';
import { selectData } from '../reducers/reviewTimeSlice';
import {
  fetchDataAsync
} from '../reducers/reviewTimeSlice';

const ReviewTime = () => {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  console.log('data', data);
  return (
    <>
      <div className="review-time">
        <Button onClick={() => dispatch(fetchDataAsync(["pr-review-time"]))}>get data</Button>
        <LineChart data={data}/>
      </div>      
    </>
  );
}

export default ReviewTime;

        