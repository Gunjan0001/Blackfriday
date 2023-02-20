import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import store from "../assets/images/png/store.png";
import sameday from "../assets/images/png/sameday.png";
import packing from "../assets/images/png/packing.png";
import rewards from "../assets/images/png/rewards.png";
import buds from "../assets/images/png/buds.png";
import mail from "../assets/images/png/mail.png";
import person from "../assets/images/png/person.png";
import secure from "../assets/images/png/srcure.png";

const Stroage = () => {
  return (
    <>
      <section className="background pb-4 pb-md-0 overflow-hidden  ">
        <Container>
          <Row className="justify-content-lg-between align-items-center justify-content-center justify-content-lg-start ">
            <Col sm={10} md={5}>
              <div>
                {" "}
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="250"
                >
                  <img className="w-100 stre_wh " src={store} alt="storage" />
                </div>
              </div>
            </Col>
            <Col md={8} lg={7}>
              <Row className="justify-content-center justify-content-sm-start justify-content-sm-between ">
                <Col sm={6}>
                  <div
                    data-aos="fade-down"
                    data-aos-duration="500"
                    data-aos-offset="250"
                  >
                    <div className="d-flex align-items-center ">
                      <img src={sameday} alt="sameday" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Same Day Delivery
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-lg-3 ">
                      <img src={packing} alt="packing" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Discreet packaging
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-lg-3 ">
                      <img src={buds} alt="buds" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2 white_space">
                        Premium Marijuana Buds
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-lg-3 ">
                      <img src={rewards} alt="rewards" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Collect Rewards
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="250"
                  >
                    <div className="d-flex align-items-center ">
                      <img src={mail} alt="mail" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Same Day Delivery
                      </p>
                    </div>{" "}
                    <div className="d-flex align-items-center mt-lg-3 ">
                      <img src={person} alt="person" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Collect Rewards
                      </p>
                    </div>
                    <div className="d-flex align-items-center mt-lg-3 ">
                      <img src={secure} alt="secure" />
                      <p className="mb-0 ff_montserrat fw_semibold fs_base text-white ms-2">
                        Discreet packaging
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Stroage;
