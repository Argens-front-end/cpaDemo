import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteErrorEvent } from "../../../Redux/AppRedux/actions";

export default function ErrorsEventComp() {
  const dispatch = useDispatch();
  const { errorEvent } = useSelector((state) => state.App);

  const _clickDeleteErrorEvent = () => {
    dispatch(deleteErrorEvent());
  };

  return (
    <>
      {errorEvent && (
        <div
          className={`toast align-items-center text-white bg-danger  border-0 ml-4 ${
            errorEvent && "show"
          }`}
          role="alert"
          aria-live="assertive"
          aria-atomic={"true"}
        >
          <div className="d-flex">
            <div className="toast-body">{errorEvent.message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Закрыть"
              onClick={_clickDeleteErrorEvent}
            />
          </div>
        </div>
      )}
    </>
  );
}
