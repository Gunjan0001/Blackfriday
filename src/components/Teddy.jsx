import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import teddy1 from "../assets/images/png/teddy1.png";
import teddy2 from "../assets/images/png/teddy2.png";
import teddy3 from "../assets/images/png/teddy3.png";
import Carousel from "react-bootstrap/Carousel";
const Teddy = () => {
  return (
    <>
      <section className="teddy_background py-5 overflow-hidden  ">
        <Container>
          {" "}
          <Carousel className="d-sm-none py-5">
            {" "}
            <Carousel.Item>
              <div>
                <img className="w-100" src={teddy1} alt="teddy1" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center mw_340 mt-4 mx-auto">
                  <span className="text_primary"> 20% Off</span> For First Time
                  Customers
                </p>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div>
                <img className="w-100" src={teddy2} alt="teddy2" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4 mx-auto">
                  Purple Panda’s{" "}
                  <span className="text_primary">Picks Of The week</span>
                </p>
              </div>
            </Carousel.Item>{" "}
            <Carousel.Item>
              <div>
                <img className="w-100" src={teddy3} alt="teddy3" />
                <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4 mx-auto">
                  <span className="text_primary"> Collect rewards</span> points
                  every time you purchase
                </p>
              </div>
            </Carousel.Item>{" "}
          </Carousel>
          <Row className="py-md-5 my-md-5 justify-content-center d-none d-sm-flex">
            <Col md={6} lg={4}>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div>
                  <img className="w-100" src={teddy1} alt="teddy1" />
                  <p className="ff_philosopher fw_bold fs_xl text-white text-center mw_340 mt-4 mx-auto">
                    <span className="text_primary"> 20% Off</span> For First
                    Time Customers
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div
                data-aos="zoom-out-up"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div>
                  <img className="w-100" src={teddy2} alt="teddy2" />
                  <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4 mx-auto">
                    Purple Panda’s{" "}
                    <span className="text_primary">Picks Of The week</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-offset="250"
              >
                <div>
                  <img className="w-100" src={teddy3} alt="teddy3" />
                  <p className="ff_philosopher fw_bold fs_xl text-white text-center  mw_340 mt-4 mx-auto">
                    <span className="text_primary"> Collect rewards</span>{" "}
                    points every time you purchase
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

export default Teddy;
