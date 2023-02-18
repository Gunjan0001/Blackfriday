import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Hours = () => {
  return (
    <section className="background py-5">
      <Container>
        <h2 className="ff_philosopher fw_regular fs_2xl text-white text-center">
          Store <span className="text_primary">Hours</span>
        </h2>
        <Row className="justify-content-center mt-5 align-items-center gap-4">
          <Col sm={4} md={3}>
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Mon : 10am-8pm
            </p>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Tue : 10am-8pm
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center gap-4">
          <Col sm={4} md={3}>
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Wed : 10am-8pm
            </p>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Thu : 10am-8pm
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center gap-4">
          <Col sm={4} md={3}>
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Fri : 10am-8pm
            </p>
          </Col>
          <Col sm={4} md={3} className="mt-2 mt-sm-0">
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center  cursor_pointer">
              Sat : 10am-8pm
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-2 mt-sm-4 align-items-center">
          <Col sm={4} md={3}>
            <p className="ff_montserrat fw_semibold fs_lg text-white border_bottom pb-3 text-center ">
              Sun : 10am-8pm
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hours;
