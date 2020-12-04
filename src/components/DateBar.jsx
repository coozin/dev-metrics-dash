import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from "@material-ui/pickers";
import {
  selectStartDate,
  selectEndDate,
  setStartDate,
  setEndDate
} from '../reducers/reviewTimeSlice';

const DateBar = () => {
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);

  const dispatch = useDispatch();

  return (
    <div className="date-container">
      <DatePicker
        variant="inline"
        inputVariant="outlined"
        label="Start Date"
        value={startDate}
        onChange={newVal => dispatch(setStartDate(newVal))}
        animateYearScrolling
        disableFuture
        format="yyyy-MM-DD"
      />
      <DatePicker
        variant="inline"
        inputVariant="outlined"
        label="End Date"
        value={endDate}
        onChange={newVal => dispatch(setEndDate(newVal))}
        animateYearScrolling
        disableFuture
        format="yyyy-MM-DD"
      />
    </div>
  );
}

export default DateBar;