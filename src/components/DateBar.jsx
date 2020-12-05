import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

import {
  AppBar,
  Toolbar,
  FormControlLabel,
  Switch,
} from "@material-ui/core"
import {
  selectStartDate,
  selectEndDate,
  selectShowKPIs,
  setStartDate,
  setEndDate,
  setShowKPIs
} from '../reducers/reviewTimeSlice';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';

const ERROR_MESSAGE = 'Range selected is too large, 3 month max (93 days)';

const DateBar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);
  const showKPIs = useSelector(selectShowKPIs);

  const dispatch = useDispatch();

  const isDateRangeValid = (dateArr) => {
    if (!dateArr) {
      return true;
    }

    const momentStart = moment(dateArr[0])
    const momentEnd = moment(dateArr[1])
    const diff = momentEnd.diff(momentStart, 'days')

    if (diff > 93) {
      return false;
    }

    return true;
  }

  const onChange = (newDateArr) => {
    if (!isDateRangeValid(newDateArr)) {
      enqueueSnackbar(ERROR_MESSAGE, { variant: "error" })
      return;
    }
    if (newDateArr && newDateArr.length) {
      const newStartDate = moment(newDateArr[0]).format("yyyy-MM-DD")
      const newEndDate = moment(newDateArr[1]).format("yyyy-MM-DD")
      dispatch(setStartDate(newStartDate))
      dispatch(setEndDate(newEndDate))
    } else {
      let thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const newStartDate = moment(thirtyDaysAgo).format("yyyy-MM-DD")
      const newEndDate = moment(new Date()).format("yyyy-MM-DD")
      dispatch(setStartDate(newStartDate))
      dispatch(setEndDate(newEndDate))
    }
  }

  const handleChangeKPI = (event) => {
    dispatch(setShowKPIs(event.target.checked))
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <div className="date-container">
          <DateRangePicker
            format="yyyy-MM-dd"
            className="date-picker"
            onChange={onChange}
            value={[startDate, endDate]}
          />
          <FormControlLabel
            control={
              <Switch
                checked={showKPIs}
                onChange={e => handleChangeKPI(e)}
                name="KPIsChecked"
                color="secondary"
              />
            }
            label="Show KPIs"
          />
        </div>
      </Toolbar>
    </AppBar>
   
  );
}

export default DateBar;