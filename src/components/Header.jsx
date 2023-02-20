import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import gift from "../assets/images/png/gift.png";
import overlays from "../assets/images/png/overlays.png";
import teddy from "../assets/images/png/teddy.png";
const Header = () => {
  return (
    <>
      <section
        className="hero_background  min_vh_100 position-relative overflow-hidden "
        id="header"
      >
        <div className="bg_secondary py-2 ">
          <div className="position-absolute overlay d-none d-xl-block w-100 z_index_1">
            <img src={overlays} alt="overlay" />
          </div>
          <Container>
            <div className="d-flex align-items-center justify-content-center">
              <img src={gift} alt="gift" />
              <p className="mb-0 ff_montserrat fw_small fs_base text-white ms-3">
                <span className="fw_extrabold">Black Friday </span>{" "}
                <span className="opacity_07">
                  savings are here ,save up to 10% off on coupon code{" "}
                </span>
              </p>
              <button className="shop_btn ff_montserrat fw_extrabold fs_base ms-4">
                Shop Now
              </button>
            </div>
          </Container>
        </div>
        <Nav />
        <div>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="text-center text-md-start">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-offset="250"
                  >
                    <h2 className="ff_philosopher fw_bold fs_4xl text-white ">
                      Setting a<span className="text_primary"> ‘High’</span>{" "}
                      Standard
                    </h2>
                    <p className="common_para mw_503  mb-0">
                      We at Purple Panda are passionate about becoming the best
                      online weed dispensary Canada has ever seen. We believe in
                      good products, fair pricing, and top-notch customer
                      service
                    </p>
                    <button className=" primary_btn ff_montserrat  fw_bold fs_md mt-5 z_index_2">
                      SIGN IN
                    </button>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div
                  data-aos="fade-left"
                  data-aos-offset="250"
                  data-aos-duration="500"
                >
                  <img className="image_wh w-100" src={teddy} alt="teddy" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
