import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter/Filter";
import Spinner from "../Components/MiniComponents/Spinner/Spinner";
import Table from "../Components/Table/Table";
import { getUsers } from "../Redux/AppRedux/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((state) => state.App);

  useEffect(() => {
    if (usersData.length === 0) {
      dispatch(getUsers());
    }
  }, [dispatch, usersData]);

  const tableHeaderData = [
    { key: "id", title: "id" },
    { key: "name", title: "Имя" },
    { key: "email", title: "email" },
    { key: "status", title: "Статус" },
    { key: "userCount", title: "userCount" },
  ];

  return (
    <div className={"row"}>
      <div className={"col"}>
        {usersData.length === 0 ? (
          <Spinner />
        ) : (
          <Table headerData={tableHeaderData} data={usersData} />
        )}
      </div>
      <div className={"col-4"}>
        <Filter />
      </div>
    </div>
  );
}
