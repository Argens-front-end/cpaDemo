import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/AppRedux/actions";

export default function PagesBtn() {
  const dispatch = useDispatch();
  const { count, page } = useSelector((state) => state.App);

  const countPages = Math.ceil(count / page.limit);

  const _onClickPrevious = () => {
    if (page.number !== 1) {
      dispatch(
        getUsers(page.number - 1, page.limit, page.userCount, page.status)
      );
    }
  };

  const _onClickNext = () => {
    if (page.number !== countPages) {
      dispatch(
        getUsers(page.number + 1, page.limit, page.userCount, page.status)
      );
    }
  };

  console.log(countPages + "countPage");
  console.log(page.number + "number");

  return (
    <div>
      {countPages !== 1 ? (
        <nav aria-label="...">
          <ul className="pagination">
            <li
              className={classNames("page-item", {
                disabled: page.number === 1,
              })}
              onClick={_onClickPrevious}
            >
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item active" aria-current="page">
              <span className="page-link">{page.number}</span>
            </li>
            <li
              className={classNames("page-item", {
                disabled: page.number === countPages,
              })}
              onClick={_onClickNext}
            >
              <div className="page-link">Next</div>
            </li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </div>
  );
}
