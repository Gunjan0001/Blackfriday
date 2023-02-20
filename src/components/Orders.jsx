import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import account1 from "../assets/images/png/account1.png";
import trace from "../assets/images/png/trace.png";
import pay from "../assets/images/png/pay.png";
import overlay from "../assets/images/png/overlay.png";

const Orders = () => {
  return (
    <>
      <section className="order_background py-5 position-relative overflow-hidden  ">
        <div className="position-absolute ovrelay_position d-none d-md-block">
          <img src={overlay} alt="overlay" />
        </div>
        <Container>
          <h2 className="common_heading text-center">
            Canada Wide <span className="text_primary">Mail Orders</span>
          </h2>
          <p className="common_para text-center mw_979 mx-auto mt-3 opacity_08">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your needs whether
            its recreational or medinical use. We ship the next business day
            from Monday-Thursdays, EMT payment is required for all mail orders
          </p>{" "}
          <Row className="py-5 justify-content-center ">
            <Col md={6} lg={4} className="mb-5">
              <div
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="mail1  h-100  ">
                  <div className="d-flex flex-column justify-content-center align-items-center mt_20">
                    <div className="blue_circle">
                      <div className="text-center white_circle">
                        <p className="mb-0 ff_montserrat fw_semibold fs_xl text_primary">
                          01
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="mt-4" src={account1} alt="account" />
                  <p className="common_para opacity_07 mb-0 mt-3 mw_290">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-5">
              {" "}
              <div
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="mail1  h-100  ">
                  <div className="d-flex flex-column justify-content-center align-items-center mt_20">
                    <div className="blue_circle">
                      <div className="text-center white_circle">
                        <p className="mb-0 ff_montserrat fw_semibold fs_xl text_primary">
                          02
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="mt-4" src={trace} alt="trace" />
                  <p className="common_para opacity_07 mb-0 mt-3 mw_290">
                    Register for an account first, then head on other to our
                    shop selection
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} className="mb-5">
              {" "}
              <div
                data-aos="flip-left"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="mail1  h-100  ">
                  <div className="d-flex flex-column justify-content-center align-items-center mt_20">
                    <div className="blue_circle">
                      <div className="text-center white_circle">
                        <p className="mb-0 ff_montserrat fw_semibold fs_xl text_primary">
                          03
                        </p>
                      </div>
                    </div>
                  </div>
                  <img className="mt-4" src={pay} alt="pay" />
                  <p className="common_para opacity_07 mb-0 mt-3 mw_290">
                    Register for an account first, then head on other to our
                    shop selection
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

export default Orders;
