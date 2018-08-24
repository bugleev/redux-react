import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = props => {
  return (
    <div className="spinner-wrapper">
      <ClipLoader
        color={"#d4c89e"}
        loading={props.loadState}
        height={150}
        width={10}
      />
    </div>
  );
};

export default Spinner;
