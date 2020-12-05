import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import utilities from '../utils/coreRequest';
const {
  coreRequest,
  allRepoGroups,
  justRepos
} = utilities;

export const reviewTimeReducer = createSlice({
  name: 'reviewTime',
  initialState: {
    lineData: null,
    barData: null,
    error: null,
    startDate: "2020-06-01",
    endDate: "2020-09-01",
    areKPIsVisible: true,
  },
  reducers: {
    fetchLineDataSuccess: (state, action) => {
      state.lineData = action.payload;
    },
    fetchBarDataSuccess: (state, action) => {
      state.barData = action.payload;
    },
    fetchDataFail: (state, action) => {
      state.err = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setShowKPIs: (state, action) => {
      state.areKPIsVisible = action.payload;
    },
  },
});

const handleDispatchChartData = (dispatch, hasRepoGroups, res) => {
  if (hasRepoGroups) {
    dispatch(fetchBarDataSuccess(res))
  } else {
    dispatch(fetchLineDataSuccess(res))
  }
}

export const { 
  fetchLineDataSuccess,
  fetchBarDataSuccess,
  fetchDataFail,
  setStartDate,
  setEndDate,
  setShowKPIs,
 } = reviewTimeReducer.actions;

export const fetchDataAsync = (metrics, startDate, endDate, hasRepoGroups = false) => async dispatch => {
  axios({
    ...coreRequest,
    data: JSON.stringify({
      "for": [
        hasRepoGroups ? allRepoGroups : justRepos
      ],
      "metrics":[...metrics],
      "date_from": startDate,
      "date_to": endDate,
      "granularities":["day"],
      "exclude_inactive":true,
      "account":1,
      "timezone":60
    }),
    
  })
    .then((response) => 
      handleDispatchChartData(dispatch, hasRepoGroups, response.data)
    )
    .catch((err) =>
      dispatch(fetchDataFail(err))
    )
}

export const selectLineData = state => state.reviewTime.lineData;
export const selectBarData = state => state.reviewTime.barData;
export const selectStartDate = state => state.reviewTime.startDate;
export const selectEndDate = state => state.reviewTime.endDate;
export const selectShowKPIs = state => state.reviewTime.areKPIsVisible;

export default reviewTimeReducer.reducer;
