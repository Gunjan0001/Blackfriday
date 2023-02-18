import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ist from "../assets/images/png/ist.png";
import about2 from "../assets/images/png/about2.png";
import about3 from "../assets/images/png/about3.png";

import about4 from "../assets/images/png/about4.png";
import about5 from "../assets/images/png/about5.png";
const About = () => {
  return (
    <>
      <section className="about_background py-md-5">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={7}>
              <div className="light_shadow p-md-5 p-3 position-relative ">
                <h2 className="ff_philosopher fw_regular fs_2xl text-white">
                  About <span className="text_primary">Us</span>
                </h2>
                <p className="common_para mb-0 mt-3">
                  Purple Panda is a Canadian online cannabis dispensary with a
                  passion for good weed and even better customer service. We all
                  remember the days of waiting for scary strangers on street
                  corners, but thankfully those days are over. Now, we’re proud
                  of how we provide an easy, convenient, and user-friendly
                  experience to our clients. We specialize in high-quality
                  cannabis for both recreational and medical purposes, while
                  also making sure that you’re getting the best bud for your
                  buck! Along with all the different strains of cannabis that we
                  stock, you can also get your fill of edibles, vapes, CBD,
                  extracts, and even buy magic mushrooms online from our store.
                </p>
                <button className="primary_btn ff_montserrat fw_bold fs_md mt-5">
                  READ MORE
                </button>
              </div>
            </Col>
            <Col md={5}>
              <div className="d-grid mt-4 mt-md-0 gap-2">
                <div className="grid_1">
                  <img className="w-100 object_fit_cover" src={ist} alt="ist" />
                </div>

                <div className="grid_2">
                  <img
                    className="w-100 object_fit_cover"
                    src={about2}
                    alt="about2"
                  />
                </div>
                <div className="grid_3">
                  <img
                    className="w-100 object_fit_cover"
                    src={about3}
                    alt="about3"
                  />
                </div>
                <div className="grid_4">
                  <img
                    className="w-100 object_fit_cover"
                    src={about4}
                    alt="about4"
                  />
                </div>
                <div className="grid_5">
                  <img
                    className="w-100 object_fit_cover"
                    src={about5}
                    alt="about5 "
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
