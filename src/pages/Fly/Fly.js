import React from "react";
import "./Fly.css";
import destination from "../images/destination-1.jpg";
const Fly = () => {
  return (
    <div className="row ">
      <div className="col-lg-4 col-md-6  ">
        <img width="100%" height="100%" src={destination} alt="" />
      </div>
      <div className="col-lg-8 col-md-6 fly-div ">
        <div className="bg1">
          <br />
          <br />

          <div className="section-title text-start mb-5 visa-text">
            <h3 className="text-white mb-8">Fly Your Dream Destination</h3>
            <br></br>
            <h5 className="idea">
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
  );
};

export default Fly;
