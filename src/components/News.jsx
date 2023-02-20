import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import integer from "../assets/images/png/integer.png";
import lectus from "../assets/images/png/lectus.png";
import odio from "../assets/images/png/odio.png";
import Carousel from "react-bootstrap/Carousel";
const News = () => {
  return (
    <>
      <section className="items_background py-5 overflow-hidden  ">
        <Container>
          <div className="text-center">
            <h2 className="ff_philosopher fw_bold fs_2xl text-white ">
              Latest <span className="text_primary"> Blogs</span> And{" "}
              <span className="text_primary"> News</span>
            </h2>
          </div>{" "}
          <Carousel className="d-sm-none py-5">
            {" "}
            <Carousel.Item>
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={integer} alt="integer" />
                <div className="ps-4">
                  <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                    12 Dec 2022
                  </p>
                  <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                    Integer vulputate
                  </p>
                  <p className="common_para mb-0 mw_308 mt-1">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                    READ MORE....
                  </p>
                </div>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={lectus} alt="lectus" />
                <div className="ps-4">
                  <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                    12 Dec 2022
                  </p>
                  <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                    Integer vulputate
                  </p>
                  <p className="common_para mb-0 mw_308 mt-1">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                    READ MORE....
                  </p>
                </div>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={odio} alt="odio" />
                <div className="ps-4">
                  <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                    12 Dec 2022
                  </p>
                  <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                    Integer vulputate
                  </p>
                  <p className="common_para mb-0 mw_308 mt-1">
                    Nulla vitae imperdiet molestie pulvinar neque. Urna senectus
                    pharetra odio sed senectus sed morbi suspendisse convallis.{" "}
                  </p>
                  <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                    READ MORE....
                  </p>
                </div>
              </div>
            </Carousel.Item>{" "}
          </Carousel>
          <Row className="pt-5 pb-lg-5 justify-content-center d-none d-sm-flex">
            <Col sm={6} md={4} className="mb-5 mb-lg-0">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="items_shadow px-2 pt-3 pb-4 h-100">
                  <img className="w-100" src={integer} alt="integer" />
                  <div className="ps-4">
                    <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                      12 Dec 2022
                    </p>
                    <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                      Integer vulputate
                    </p>
                    <p className="common_para mb-0 mw_308 mt-1">
                      Nulla vitae imperdiet molestie pulvinar neque. Urna
                      senectus pharetra odio sed senectus sed morbi suspendisse
                      convallis.{" "}
                    </p>
                    <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                      READ MORE....
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="mb-5 mb-lg-0">
              <div
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="items_shadow px-2 pt-3 pb-4 h-100">
                  <img className="w-100" src={lectus} alt="lectus" />
                  <div className="ps-4">
                    <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                      12 Dec 2022
                    </p>
                    <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                      Integer vulputate
                    </p>
                    <p className="common_para mb-0 mw_308 mt-1">
                      Nulla vitae imperdiet molestie pulvinar neque. Urna
                      senectus pharetra odio sed senectus sed morbi suspendisse
                      convallis.{" "}
                    </p>
                    <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                      READ MORE....
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} md={4} className="mb-5 mb-lg-0">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div className="items_shadow px-2 pt-3 pb-4 h-100">
                  <img className="w-100" src={odio} alt="odio" />
                  <div className="ps-4">
                    <p className="ff_montserrat fw_regular fs_sm text-white mt-3 mb-0">
                      12 Dec 2022
                    </p>
                    <p className="ff_montserrat fw_semibold fs_lg text-white mb-0 mt-3">
                      Integer vulputate
                    </p>
                    <p className="common_para mb-0 mw_308 mt-1">
                      Nulla vitae imperdiet molestie pulvinar neque. Urna
                      senectus pharetra odio sed senectus sed morbi suspendisse
                      convallis.{" "}
                    </p>
                    <p className="ff_montserrat fw_regular fs_xsm text_primary mb-0 mt-5 cursor_pointer">
                      READ MORE....
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default News;
