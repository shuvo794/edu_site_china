import React from "react";
import "./Fly.css";
import destination from "../images/destination-1.jpg";
const Fly = () => {
  return (
    <>
      <div className="coustom">
        <div>
          <img className="desti" height="360px" src={destination} alt="" />
        </div>

        <div className="bg">
          <br />
          <br />

          <div className="section-title text-center mb-5">
            <h3 className="text-white mb-8">Fly Your Dream Destination</h3>
            <br></br>
            <h5 className="idea">
              Idea of denouncing pleasure & praising pain was born.
            </h5>
            <p className="text-white fw-700 pera">
              Entering & Leaving From Country
            </p>
            <p className="text-white fw-700 pera2">Visas</p>
            <p className="text-white fw-700 pera3">Country Citizenship</p>
            <input
              className="submit-btn btn btn-primary pera4"
              type="submit"
              value="Contact Us"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Fly;