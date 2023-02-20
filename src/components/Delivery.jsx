import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bigflower from "../assets/images/png/bigflower.png";
const Delivery = () => {
  return (
    <>
      <section className="py-md-5 background overflow-hidden  ">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              {" "}
              <div
                data-aos="zoom-in-right"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <img className="w-100" src={bigflower} alt="flower" />
              </div>
            </Col>
            <Col md={5}>
              <div className="big_shadow">
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="500"
                  data-aos-offset="250"
                >
                  <h2 className="common_heading">
                    <span className="text_primary">Express </span>Cannabis
                    Delivery
                  </h2>
                  <p className="common_para mb-0 mt-3">
                    One of the ways that we set ourselves apart from your
                    average dispensary is through our express delivery service.
                    We’ve all been there – work has finished early and you’ve
                    gotten home, but your jar is empty and the nearest
                    dispensary is miles away. With our service, you could have a
                    box of premium pre-rolls, a bag of bodacious buds, or a
                    package of enticing edibles at your door in just three
                    hours!
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Delivery;
