import React from "react";
import { Container } from "react-bootstrap";
import mushroom from "../assets/images/png/mushroom.png";
import extracts from "../assets/images/png/extracts.png";
import vapes from "../assets/images/png/vapes.png";
import cbd from "../assets/images/png/cbd.png";
import edibiles from "../assets/images/png/edibiles.png";
import cannabis from "../assets/images/png/cannabis.png";
import lightshadow from "../assets/images/png/lightshadow.png";
import bulkorders from "../assets/images/png/bulkorders.png";
import Carousel from "react-bootstrap/Carousel";
const Mushroom = () => {
  return (
    <>
      <section className="background py-5 position-relative  ">
        <div className="position-absolute shadow_position d-none d-md-block z_index_0">
          <img src={lightshadow} alt="shadow" />
        </div>
        <Container>
          <Carousel className="d-sm-none">
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={mushroom} alt="mushroom" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Mushrooms
                </p>
              </div>{" "}
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={extracts} alt="extracts" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Extracts
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={vapes} alt="vapes" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3 mw_133 mx-auto">
                  Vapes & Accessories
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={cbd} alt="cbd" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  CBD
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={edibiles} alt="edibiles" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Edibles
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={cannabis} alt="cannabis" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Cannabis
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">
                <img className="w-100" src={bulkorders} alt="bulkorders" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Bulk Orders
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="row justify-content-xxl-between justify-content-center justify-content-xxl-start d-none d-sm-flex">
            <div className="col-auto">
              <div className="text-center">
                <img className="w-100" src={mushroom} alt="mushroom" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Mushrooms
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={extracts} alt="extracts" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Extracts
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={vapes} alt="vapes" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3 mw_133 mx-auto">
                  Vapes & Accessories
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={cbd} alt="cbd" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  CBD
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={edibiles} alt="edibiles" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Edibles
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={cannabis} alt="cannabis" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Cannabis
                </p>
              </div>
            </div>
            <div className="col-auto">
              {" "}
              <div className="text-center">
                <img className="w-100" src={bulkorders} alt="bulkorders" />
                <p className="ff_philosopher fw_bold fs_lg text-white mb-0 mt-3">
                  Bulk Orders
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Mushroom;
