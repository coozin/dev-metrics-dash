import axios from 'axios';
import { useSelector } from 'react-redux';

const initialState = {
  data: null,
  error: null,
  startDate: "2020-06-01",
  endDate: "2020-09-01",
}

export default function reviewTimeReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetchDefaultDataSuccess': {
      state.data = action.payload;
      break;
    }
    case 'fetchDefaultDataFail': {
      state.err = action.payload;
      break;
    }
    case 'setStartDate': {
      state.startDate = action.payload;
      break;
    }
    case 'setEndDate': {
      state.endDate = action.payload;
      break;
    }
    default:
      return state
  }
}

export const setStartDate = (newDate) => dispatch => {
  console.log('setStartDate newDate', newDate)
  dispatch({ type: 'setStartDate', payload: newDate.format("yyyy-MM-DD") })
}

export const setEndDate = (newDate) => dispatch => {
  console.log('setEndDate newDate', newDate)
  dispatch({ type: 'setEndDate', payload: newDate.format("yyyy-MM-DD") })
}

export const fetchDataAsync = (metrics, startDate, endDate) => async dispatch => {
  axios({
    method: "POST",
    url: 'https://api.athenian.co/v1/metrics/prs',
    data: JSON.stringify({
      "for":[
        {"repositories":["github.com/athenianco/athenian-api",
                         "github.com/athenianco/athenian-webapp",
                         "github.com/athenianco/infrastructure",
                         "github.com/athenianco/metadata"]}
      ],
      "metrics":[...metrics],
      "date_from": startDate,
      "date_to": endDate,
      "granularities":["day"],
      "exclude_inactive":true,
      "account":1,
      "timezone":60
    }),
    mode: "cors",
    credentials: "omit"
  })
    .then((response) => 
      dispatch({ type: 'fetchDefaultDataSuccess', payload: response.data })
    )
    .catch((err) =>
      dispatch({ type: 'fetchDefaultDataFail', payload: err })
    )
}

export const selectData = state => state.data;
export const selectStartDate = state => state.startDate;
export const selectEndDate = state => state.endDate;
