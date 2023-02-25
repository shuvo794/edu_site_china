import React from "react";
import company1 from "../images/1-2.jpg";
import company2 from "../images/2-1.jpg";
import company3 from "../images/3-1.jpg";
import company4 from "../images/4-1.jpg";
import "./Add.css";
const Add = () => {
  return (
    <div className=" container">
      <div className="row">
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <img src={company1} alt="" />
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <img src={company2} alt="" />
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <img src={company3} alt="" />
        </div>
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
          <img src={company4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Add;
