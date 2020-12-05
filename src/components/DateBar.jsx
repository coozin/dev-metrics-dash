import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from "@material-ui/pickers";
import { AppBar, Toolbar } from "@material-ui/core"
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
    <AppBar position="static">
      <Toolbar>
        <div className="date-container">
          <DatePicker
            className="date-picker"
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
            className="date-picker"
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
      </Toolbar>
    </AppBar>
   
  );
}

export default DateBar;