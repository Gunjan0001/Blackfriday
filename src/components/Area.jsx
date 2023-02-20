import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pinkcircle from "../assets/images/png/pinkcircle.png";
import area22 from "../assets/images/png/area22.png";
import area11 from "../assets/images/png/area11.png";
import Carousel from "react-bootstrap/Carousel";
const Area = () => {
  return (
    <>
      <section className="background pt-5  pb-lg-5 position-relative overflow-hidden  ">
        <div className="position-absolute flowers_position d-none d-md-block">
          <img src={area22} alt="area22" />
        </div>
        <div className="position-absolute flowers_position2 d-none d-md-block">
          <img src={area11} alt="area11" />
        </div>
        <Container>
          <div
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-offset="250"
          >
            <h2 className="ff_montserrat fw_semibold fs_lg text-white w_636 text-center mx-auto">
              We’re based in both the
              <span className="text_primary"> Greater Toronto Area </span>, with
              our delivery service covering:
            </h2>
            <p className="common_para text-center mb-0 mt-4">
              If you’re in any of these cities and need a little pick me up, you
              know where to go!
            </p>
          </div>
          <Carousel className="d-sm-none py-5">
            {" "}
            <Carousel.Item>
              <div className="area_shadow2 shadow_padding  shadow_border ">
                <div className="d-flex align-items-center  mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Mississauga
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Oakville
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Brampton
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Etobicoke
                  </p>
                </div>
              </div>{" "}
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="area_shadow2 shadow_padding shadow_border">
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Toronto
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Vaughan
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Markham
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Richmond
                  </p>
                </div>
              </div>
            </Carousel.Item>{" "}
          </Carousel>
          <Row className="justify-content-center py-5 d-none d-sm-flex">
            <Col md={6} className="mb-4  ">
              {" "}
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="area_shadow2 shadow_padding  shadow_border ">
                  <div className="d-flex align-items-center  mt-3">
                    <img src={pinkcircle} alt="pinkcircle" />
                    <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                      Mississauga
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={pinkcircle} alt="pinkcircle" />
                    <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                      Oakville
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={pinkcircle} alt="pinkcircle" />
                    <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                      Brampton
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={pinkcircle} alt="pinkcircle" />
                    <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                      Etobicoke
                    </p>
                  </div>
                </div>{" "}
              </div>
            </Col>
            <Col md={6} className="mb-4">
              {" "}
              <div
                data-aos="fade-left"
                data-aos-offset="250"
                data-aos-duration="500"
              ></div>
              <div className="area_shadow2 shadow_padding shadow_border">
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Toronto
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Vaughan
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <img src={pinkcircle} alt="pinkcircle" />
                  <p className="ff_montserrat  fw_regular fs_xl text-white mb-0 ms-4">
                    Markham
                  </p>
                </div>
                <div className="d-flex align-items-center mt-3">
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
