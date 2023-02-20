import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import patch1 from "../assets/images/png/patch1.png";
import patch2 from "../assets/images/png/patch2.png";
import patch3 from "../assets/images/png/patch3.png";
import Carousel from "react-bootstrap/Carousel";
const Items = () => {
  return (
    <section className="items_background py-5 overflow-hidden  ">
      <Container>
        <div className="text-center">
          <h2 className="ff_philosopher fw_bold fs_2xl text-white ">
            Most <span className="text_primary">Popular </span>Items
          </h2>
          <p className="common_para  mt-3">
            Pellentesque tincidunt fermentum mauris dignissim quam{" "}
            <span className="d-lg-block">
              arcu. A netus natoque urna vivamus faucibus. Sollicitudin et nisl.
            </span>
          </p>
        </div>
        <Carousel className="d-sm-none py-5">
          {" "}
          <Carousel.Item>
            <div className="items_shadow px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={patch2} alt="patch2" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg text_primary">$20.00</p>
              <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                ADD TO CART
              </button>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="items_shadow px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={patch3} alt="patch3" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg text_primary">$20.00</p>
              <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                ADD TO CART
              </button>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="items_shadow px-2 pt-3 pb-4 h-100">
              <img className="w-100" src={patch3} alt="patch3" />
              <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                Stoner Patch(500mg)
              </p>
              <p className="ff_montserrat fw_bold fs_lg text_primary">$20.00</p>
              <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                ADD TO CART
              </button>
            </div>
          </Carousel.Item>{" "}
        </Carousel>
        <Row className="pt-5 pb-lg-5 justify-content-center d-none d-sm-flex">
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={patch1} alt="patch1" />
                <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_montserrat fw_bold fs_lg text_primary">
                  $20.00
                </p>
                <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            <div
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={patch2} alt="patch2" />
                <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_montserrat fw_bold fs_lg text_primary">
                  $20.00
                </p>
                <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            {" "}
            <div
              data-aos="flip-up"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={patch3} alt="patch3" />
                <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_montserrat fw_bold fs_lg text_primary">
                  $20.00
                </p>
                <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={3} className="mb-5 mb-lg-0">
            {" "}
            <div
              data-aos="flip-down"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <div className="items_shadow px-2 pt-3 pb-4 h-100">
                <img className="w-100" src={patch3} alt="patch3" />
                <p className="ff_montserrat fw_regular fs_lg text-white mt-3 mb-0">
                  Stoner Patch(500mg)
                </p>
                <p className="ff_montserrat fw_bold fs_lg text_primary">
                  $20.00
                </p>
                <button className="primary_btn mt-4 ff_montserrat fw_bold fs_base text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Items;
