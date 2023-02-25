import React from "react";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-area pt-5 pb-3 mt-5">
      <div className="footer-top">
        <Container>
          <Row>
            <Col md={3}>
              <div className="footer-box">
                <h4>Get In Touch</h4>
                <div className="links mt-4">
                  <ul>
                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      Contact
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      Go to Home
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-box">
                <h4>Useful Category</h4>
                <div className="links mt-4">
                  <ul>
                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Questions
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Assignments
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Syllabus
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Blogs
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Notes
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Labs
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-box">
                <h4>Important Links</h4>
                <div className="links mt-4">
                  <ul>
                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      All Books
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      Dashboard
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      User Profile
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      My Questions
                    </li>

                    <li>
                      {" "}
                      <FaArrowRight className="link-icon" />
                      My Notes
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-box">
                <h4>Social Media</h4>
                {/* <div className="subscribe-form mt-4">
                          <form onSubmit={handleSubmit}>
                              <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder='Enter Email' />
                              <button type='submit'>Subscribe <FaArrowRight className='link-icon' /></button>
                          </form>
                      </div> */}
                <div className="footer-social mt-3">
                  {/* <h5>Social Media</h5> */}
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
