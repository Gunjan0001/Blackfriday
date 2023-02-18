import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cannabis1 from "../assets/images/png/cannabis1.png";
import cannabis2 from "../assets/images/png/cannabis2.png";
import cannabis3 from "../assets/images/png/cannabis3.png";
import cannabis4 from "../assets/images/png/cannabis4.png";
import cannabis5 from "../assets/images/png/cannabis5.png";

const Cannabis = () => {
  return (
    <section className="cannabis_background py-5">
      <Container>
        <h2 className="ff_philosopher fw_bold fs_2xl text-white text-center">
          Cannabis
        </h2>
        <p className="common_para mb-0 text-center mt-3">
          While we stock all sorts of products to make you feel great, we’re
          experts and lovers of cannabis at{" "}
          <span className="d-lg-block">
            heart. We offer a wide range of buds each with different highs,
            flavors, and aromas, so you can find{" "}
          </span>{" "}
          the perfect joint-filler, bowl-packer, or pipe clearer to suit your
          tastes
        </p>
        <Row className="align-items-center py-5">
          <Col md={7} className="mb-5 mb-md-0">
            <div className="light_shadow p-5">
              <h2 className="ff_montserrat fw_semibold fs_xl text-white">
                Strain <span className="text_primary"> Families </span>
              </h2>
              <p className="common_para mb-0 mt-3">
                We stock the three main families of cannabis at Purple Panda,
                each of which has its own qualities.
              </p>
              <div className="d-flex gap-3 mt-3 mt-xl-5">
                <p className="ff_montserrat fw_semibold fs_lg text-white">
                  Indica:
                </p>
                <p className="common_para text-white">
                  These are your bedtime buds, great for relaxing at the end of
                  the day and for treating stress and anxiety.
                </p>
              </div>
              <div className="d-flex gap-3 mt-xl-5">
                <p className="ff_montserrat fw_semibold fs_lg text-white">
                  Sativa:
                </p>
                <p className=" common_para  text-white">
                  Smoke up some Sativa for a boost of energy and creativity,
                  perfect for a sunny summer’s day with friends!
                </p>
              </div>
              <div className="d-flex gap-3 mt-xl-5">
                <p className="ff_montserrat fw_semibold fs_lg text-white">
                  Hybrid:
                </p>
                <p className="common_para  text-white">
                  Get the best of both worlds with our Hybrid range, bringing
                  together the sensations and flavors of Indica and Sativa for
                  something totally unique.
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="d-grid mt-4 mt-md-0 gap-2">
              <div className="grid_1">
                <img
                  className="w-100 object_fit_cover"
                  src={cannabis1}
                  alt="cannabis1"
                />
              </div>

              <div className="grid_2">
                <img
                  className="w-100 object_fit_cover"
                  src={cannabis2}
                  alt="cannabis2"
                />
              </div>
              <div className="grid_3">
                <img
                  className="w-100 object_fit_cover"
                  src={cannabis3}
                  alt="cannabis3"
                />
              </div>
              <div className="grid_4">
                <img
                  className="w-100 object_fit_cover"
                  src={cannabis4}
                  alt="cannabis4"
                />
              </div>
              <div className="grid_5">
                <img
                  className="w-100 object_fit_cover"
                  src={cannabis5}
                  alt="cannabis5 "
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cannabis;
