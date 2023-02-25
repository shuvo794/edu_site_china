import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../images/contactUS.gif";
import "./Contuct.css";
const Contuct = () => {
  return (
    <Container>
      <Row className="my-5 hole">
        <Col lg={6}>
          <img src={contact} className="img-fluid my-5" alt="" />
          {/*  <div >
            <h3>Get In Touch</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div> */}
        </Col>
        <Col lg={6}>
          <div>
            <h3 className="mb-3">Contact Us</h3>
          </div>
          <form className="contact-right " onSubmit={""}>
            <input placeholder="Name" required id="name" className="rounde" />

            <input placeholder="Email" required id="email" />

            <input required id="mess" />
            <input
              className="submit-btn btn btn-primary"
              type="submit"
              value="Send Message"
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contuct;
