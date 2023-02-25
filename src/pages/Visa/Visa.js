import React from "react";

import "../Counter/Counter.css";
import visa1 from "../images/visa-1.jpg";
import visa2 from "../images/visa-2.jpg";
import visa3 from "../images/visa-3.jpg";
import visa4 from "../images/visa-4.jpg";
import "./visa.css";

const Visa = () => {
  return (
    <div className="teamWrapper">
      <div className="section-title text-center mb-5">
        <h3 className="text-center fw-bold">Welcome to Immigo</h3>
        <span></span>
      </div>

      <span></span>
      <div class="row justify-content-center p-5  shadow ">
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src={visa1} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Student Visa </h4>
              <span>Foresee the pain and trouble that are bound ensue.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src={visa2} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Residence Visa</h4>
              <span>Desire that they can foresee trouble bound ensue.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src={visa3} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Business Visa</h4>
              <span>Equally blame belongs those who fail in their duty.</span>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
          <div class="member" data-aos="fade-up" data-aos-delay="400">
            <div class="member-img">
              <img src={visa4} class="img-fluid" alt="" />
            </div>
            <div class="member-info">
              <h4>Tourist Visa</h4>
              <span>Sponsoring and managing work Immigration and Visa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;
