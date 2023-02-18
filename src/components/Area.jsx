import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pinkcircle from "../assets/images/png/pinkcircle.png";
import area11 from "../assets/images/png/area11.png";
const Area = () => {
  return (
    <>
      <section className="background pt-5  pb-lg-5 position-relative ">
        <div className="position-absolute flower1_position d-none d-md-block">
          <img className="w-100" src={area11} alt="area11" />
        </div>
        <Container>
          <h2 className="ff_montserrat fw_semibold fs_lg text-white w_636 text-center mx-auto">
            We’re based in both the
            <span className="text_primary"> Greater Toronto Area </span>, with
            our delivery service covering:
          </h2>
          <p className="common_para text-center mb-0 mt-2">
            If you’re in any of these cities and need a little pick me up, you
            know where to go!
          </p>
          <Row className="justify-content-center py-5">
            <Col md={6} className="mb-4">
              <div className="area_shadow1 shadow_padding ">
                <div className="d-flex align-items-center ">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Mississauga
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Oakville
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Brampton
                  </p>
                </div>
                <div className="d-flex align-items-center ">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Etobicoke
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              {" "}
              <div className="area_shadow1 shadow_padding ">
                <div className="d-flex align-items-center">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Toronto
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Vaughan
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Markham
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Richmond
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

export default Area;
