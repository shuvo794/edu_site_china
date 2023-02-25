import React from "react";

import logo from "../../images/YC.png";
import payment from "../../images/payment-methods.png";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="page-footer font-small blue pt-4 border-area">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 img-grib">
              <img className="logo" src={logo} alt="logo" />
              <br />
              <br />
              <img
                className="payment"
                width="80%"
                height="60%"
                src={payment}
                alt=""
              />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-primary">Featured Links</h5>
              <ul className="list-unstyled">
                <li>Graduation</li>
                <li>Admissions</li>
                <li>International</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase text-primary">Our Visa</h5>
              <ul className="list-unstyled text-black">
                <li>Student Visa</li>
                <li>Residence Visa</li>
                <li>Business Visa</li>
                <li>Tourist Visa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2023 Copyright :<a href="#!"> Shuvo</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
