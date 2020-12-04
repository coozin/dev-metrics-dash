import React from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
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
        <Button onClick={() => dispatch(fetchDataAsync())}>get data</Button>
      </div>      
    </>
  );
}

export default ReviewTime;

        