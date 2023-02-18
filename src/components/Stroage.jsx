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
import downimage from "../assets/images/png/downimage.png";
const Stroage = () => {
  return (
    <>
      <section className="background py-5">
        <Container>
          <Row className="justify-content-between align-items-center position_lg_relative ">
            {/* <div className=" position_lg_absolute  d-none d-xl-block z_index_0 ">
              <img className="" src={downimage} alt="downimage" />
            </div> */}
            <Col sm={10} md={4}>
              <img
                className="w-100 stre_wh z_index_2 position-relative"
                src={store}
                alt="storage"
              />
            </Col>
            <Col md={8} lg={7}>
              <Row className="justify-content-center">
                <Col sm={6}>
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
                </Col>
                <Col sm={6}>
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
