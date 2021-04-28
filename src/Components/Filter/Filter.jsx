import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  onChangeLimit,
  onChangeUserCount,
  selectedUserStatus,
  submitFilterData,
} from "../../Redux/AppRedux/actions";

export default function Filter() {
  const dispacth = useDispatch();
  const { userCount, limit, status } = useSelector((state) => state.App.filter);

  const _onChangeLimit = (e) => {
    dispacth(onChangeLimit(e.target.value));
  };

  const _onChangeUserCount = (e) => {
    dispacth(onChangeUserCount(e.target.value));
  };

  const _selectedUserStatus = (e) => {
    dispacth(selectedUserStatus(e.target.value));
  };

  const _clickGetUsers = () => {
    dispacth(submitFilterData());
    dispacth(getUsers(1, limit, userCount, status));
  };

  return (
    <div className={"card mt-2 p-3"}>
      Фильтр
      <div>
        <label htmlFor="Range" className="form-label">
          Лимит {limit}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="100"
          id="Range"
          value={limit}
          onChange={_onChangeLimit}
        />
      </div>
      <div>
        <label htmlFor="Range" className="form-label">
          Count {userCount}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="1000"
          id="Range"
          value={userCount}
          onChange={_onChangeUserCount}
        />
      </div>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={_selectedUserStatus}
          value={status}
        >
          <option value={false}>Выберете статус пользователя</option>
          <option value="active">active</option>
          <option value="pending">pending</option>
          <option value="disable">disable</option>
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={_clickGetUsers}
      >
        Выбрать
      </button>
    </div>
  );
}
