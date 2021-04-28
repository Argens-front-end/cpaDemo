import axios from "axios";
import {
  ADD_ERROR_EVENT,
  DELETE_ERROR_EVENT,
  FILL_USERS_DATA,
  ON_CHANGE_LIMIT,
  ON_CHANGE_USER_COUNT,
  SELECT_USER_STATUS,
  SUBMIT_FILTER_DATA,
} from "./types";

export const getUsers = (page = 1, limit = 25, userCount, status) => async (
  dispatch
) => {
  function getQueryStatus() {
    if (status) {
      return `&status=${status}`;
    }

    return "";
  }

  function getQueryUserCount() {
    if (userCount) {
      return `&userCount=${userCount}`;
    }

    return "";
  }

  axios
    .get(
      `https://white3snet.com/list.php?page=${page}&limit=${limit}${getQueryStatus()}${getQueryUserCount()}`
    )
    .then((response) => {
      dispatch({ type: FILL_USERS_DATA, payload: response.data });
    })
    .catch((e) => {
      if (e.response.status === 403) {
        dispatch({ type: ADD_ERROR_EVENT, payload: "Error request" });

        setTimeout(() => {
          dispatch({ type: DELETE_ERROR_EVENT });
        }, 5000);

        dispatch(getUsers(page, limit, userCount, status));
      }
    });
};

export const deleteErrorEvent = () => {
  return {
    type: DELETE_ERROR_EVENT,
  };
};

export const onChangeLimit = (value) => {
  return {
    type: ON_CHANGE_LIMIT,
    payload: value,
  };
};

export const onChangeUserCount = (value) => {
  return {
    type: ON_CHANGE_USER_COUNT,
    payload: value,
  };
};

export const selectedUserStatus = (value) => {
  return {
    type: SELECT_USER_STATUS,
    payload: value,
  };
};

export const submitFilterData = () => {
  return {
    type: SUBMIT_FILTER_DATA,
  };
};
