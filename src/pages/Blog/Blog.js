import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
const data = [
  {
    id: 1,
    img: "https://eduvai.com/sites/all/themes/eduvai/assets/img/values-1.png",
    title: "Information",
    discription:
      "Know about Govt. and Not-govt. Educational Institutes of Bangladesh.",
  },
  {
    id: 2,
    img: "https://eduvai.com/sites/all/themes/eduvai/assets/img/values-2.png",
    title: "Education",
    discription:
      "Study to prepare for University Admission or Govt. Job exams.",
  },
  {
    id: 3,
    img: "https://eduvai.com/sites/all/themes/eduvai/assets/img/values-3.png",
    title: "Support",
    discription:
      "Get yourself fully prepared to sit for admission or for a Job.",
  },
];
const Blog = () => {
  return (
    <Container className="mt-5">
      <div className="section-title text-center mb-5">
        <h3>All That needed for Study.</h3>
        <span></span>
      </div>
      <Row xs={1} md={3} className="g-4">
        {data.map((item) => (
          <Col>
            <Card>
              <Card.Img className="w-75 " variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                {/* <Card.Text>{item.discription}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
