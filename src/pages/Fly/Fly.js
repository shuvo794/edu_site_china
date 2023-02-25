import React from "react";
import "./Fly.css";
import destination from "../images/destination-1.jpg";
const Fly = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <img width="auto" height="100%" src={destination} alt="" />
        </div>
        <div className="col-lg-8 col-md-6  d-flex align-items-stretch">
          <div className="bg1">
            <div className="section-title px-5 mb-5">
              <div className="visa-text">
                <h3 className="text-white mb-3">Fly Your Dream Destination</h3>

                <h5 className="text-white">
                  Idea of denouncing pleasure & praising pain was born.
                </h5>
                <p className="text-white fw-700 pera">
                  Entering & Leaving From Country
                </p>

                <input
                  className="submit-btn btn btn-primary pera4"
                  type="submit"
                  value="Contact Us"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fly;
