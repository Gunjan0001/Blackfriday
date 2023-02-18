import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import price from "../assets/images/png/price.png";
const Price = () => {
  return (
    <>
      <section className="background py-lg-5 ">
        <Container>
          <Row className="price_shadow p-5  align-items-center position_xl_relative my-lg-5">
            <Col md={7}>
              <div className="text-center text-md-start">
                <h2 className="common_heading p-lg-4 p-2">
                  High <span className="text_primary">Thoughts</span>, Low{" "}
                  <span className="text_primary">Prices</span>
                </h2>
                <p className="common_para mw_569 mb-0 mt-2">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <button className="primary_btn mt-lg-5 mt-3">
                  GIVE PURPLE PANDA A GO
                </button>
              </div>
            </Col>
            <Col sm={7} md={5}>
              <div className="position_xl_absolute price_position mt-4 mt-md-0 ">
                <img className="w-100" src={price} alt="price" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Price;
