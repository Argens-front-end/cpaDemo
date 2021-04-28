import React from "react";
import PagesBtn from "../MiniComponents/PagesBtn/PagesBtn";

export default function Table({ headerData, data }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headerData?.map((item) => {
              return (
                <th scope="col" key={item.key}>
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                {headerData?.map(({ key }, index) => {
                  return <td key={item[key] + index}>{item[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <PagesBtn />
    </div>
  );
}
