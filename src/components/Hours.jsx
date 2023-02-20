import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hours = () => {
  return (
    <section className="background py-5 overflow-hidden  ">
      <Container>
        <h2 className="ff_philosopher fw_regular fs_2xl text-white text-center">
          Store <span className="text_primary">Hours</span>
        </h2>
        <Row className="justify-content-center mt-5 align-items-center gap-4">
          <Col sm={4} md={3}>
            <div
              data-aos="zoom-out-right"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Mon : 10am-8pm
              </p>
            </div>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <div
              data-aos="zoom-out-left"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Tue : 10am-8pm
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center gap-4">
          <Col sm={4} md={3}>
            <div
              data-aos="zoom-out-right"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Wed : 10am-8pm
              </p>
            </div>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <div
              data-aos="zoom-out-left"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Thu : 10am-8pm
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center gap-4">
          <Col sm={4} md={3}>
            <div
              data-aos="zoom-out-right"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Fri : 10am-8pm
              </p>
            </div>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <div
              data-aos="zoom-out-left"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
                Sat : 10am-8pm
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center">
          <Col sm={4} md={3}>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center ">
                Sun : 10am-8pm
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hours;
