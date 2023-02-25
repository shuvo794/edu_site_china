import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaGraduationCap, FaUserAlt } from "react-icons/fa";
import "./Service.css";

const Service = () => {
  return (
    <div className="py-5 service-area">
      <Container>
        <Row>
          <Col>
            <div className="section-title text-center mb-5">
              <h3> Featured Categories</h3>
              <span></span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <div className="single-service shadow">
              <FaGraduationCap className="ico" />
              <h5>Scholarship Facility</h5>
              <p>Our institution Provide a student Scholarship</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service shadow">
              <FaUserAlt className="ico" />
              <h5>Skilled Lecturers</h5>
              <p>Our all lecturers high skilled . best serve a study</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-service shadow">
              <FaBook className="ico" />
              <h5>Book Library & Store</h5>
              <p>We have nice library .All student get all kind of Book </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Service;
