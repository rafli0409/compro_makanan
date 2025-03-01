import React from "react";
import Empty from "../../../assets/13525-empty.gif";
import "../EmptyList/style.css";

const EmptyList = () => {
  return (
    <>
      <div className="emptyList-wrap">
        <img src={Empty} alt="empty" />
      </div>
    </>
  );
};

export default EmptyList;
