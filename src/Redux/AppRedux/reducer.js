import {
  ADD_ERROR_EVENT,
  DELETE_ERROR_EVENT,
  FILL_USERS_DATA,
  ON_CHANGE_LIMIT,
  ON_CHANGE_USER_COUNT,
  SELECT_USER_STATUS,
  SUBMIT_FILTER_DATA,
} from "./types";

const initialState = {
  errorEvent: false,
  usersData: [],
  filter: {
    limit: 25,
    status: false,
    userCount: null,
  },
  count: 0,
  page: {
    number: 1,
    limit: 25,
    status: false,
    userCount: null,
  },
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILL_USERS_DATA:
      return {
        ...state,
        usersData: action.payload.data,
        count: action.payload.count,
        page: { ...state.page, number: action.payload.page },
      };

    case ADD_ERROR_EVENT:
      return {
        ...state,
        errorEvent: { message: action.payload },
      };

    case DELETE_ERROR_EVENT:
      return {
        ...state,
        errorEvent: false,
      };

    case ON_CHANGE_LIMIT:
      return {
        ...state,
        filter: {
          ...state.filter,
          limit: action.payload,
        },
      };

    case ON_CHANGE_USER_COUNT:
      return {
        ...state,
        filter: {
          ...state.filter,
          userCount: action.payload,
        },
      };

    case SELECT_USER_STATUS:
      return {
        ...state,
        filter: {
          ...state.filter,
          status: action.payload,
        },
      };

    case SUBMIT_FILTER_DATA:
      return {
        ...state,
        page: {
          ...state.page,
          ...state.filter,
        },
      };

    default:
      return state;
  }
};
