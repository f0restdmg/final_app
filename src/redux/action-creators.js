import { actionTypes } from "./action-types";

export const getData = (payload) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload,
});

export const fetchData = () => ({
  type: actionTypes.FETCH_DATA,
});
