import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import star from "../assets/images/png/star.png";
import overlays from "../assets/images/png/overlays.png";
import leaf from "../assets/images/png/leaf.png";

const Classifications = () => {
  return (
    <section
      className="hero_background py-md-5 position-relative overflow-hidden  "
      id="faq"
    >
      <img
        className="position-absolute overlay_position1 w-100 d-none d-md-block"
        src={overlays}
        alt="overlay"
      />
      <img
        className="position-absolute leaf_position d-none d-md-block"
        src={leaf}
        alt="leaf"
      />
      <Container>
        <Row className="my-md-3">
          <Col lg={6}>
            <div
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <div className="shadows p-xl-5  p-3">
                <h2 className="ff_philosopher fw_bold fs_2xl text-white text_stroke">
                  Our <span className="text_primary">Classifications</span>
                </h2>
                <p className="common_para mb-0">
                  We’re proud of all our weed, but we still classify it based on
                  quality and price, with our levels classed at:
                </p>
                <div className="d-flex gap-2 mt-4">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-1">
                  2- Star
                </p>
                <p className="common_para mb-0">
                  Very affordable , entry level quality
                </p>
                <div className="d-flex gap-2 mt-2 mt-md-4">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  3- Star
                </p>
                <p className="common_para mb-0">
                  Tried, tested, and affordable.
                </p>
                <div className="d-flex gap-2 mt-2 mt-md-4">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  4- Star
                </p>
                <p className="common_para mb-0">
                  A step up in terms of taste, high, and quality.
                </p>
                <div className="d-flex gap-2 mt-2 mt-md-4">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                </div>
                <p className="ff_montserrat fw_semibold fs_lg text-white mb-0">
                  5- Star
                </p>
                <p className="common_para mb-0">
                  Top-shelf buds for those special occasions.
                </p>
                <button className="primary_btn ff_montserrat fw_bold fs_md mt-5">
                  TRY PURPLE PANDA TODAY
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Classifications;
