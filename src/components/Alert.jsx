import React from "react";
import { Container } from "react-bootstrap";
import spaceman from "../assets/images/png/spaceman.png";
import twinkle from "../assets/images/png/twinkle.png";
import cloud from "../assets/images/png/cloud.png";
const Alert = () => {
  return (
    <section className="background py-5 position-relative overflow-hidden  ">
      <img
        className="position-absolute w-100 twinkleimg_set h-100 d-none d-sm-block"
        src={twinkle}
        alt="twinkle"
      />
      <img
        className="position-absolute cloud_set1 d-none d-sm-block cloud"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud_set2 d-none d-sm-block cloud2"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud_set3 d-none d-xl-block cloud"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud_set4 d-none d-sm-block cloud2"
        src={cloud}
        alt="cloud"
      />
      <img
        className="position-absolute cloud_set5 d-none d-sm-block cloud3"
        src={cloud}
        alt="cloud"
      />
      <Container>
        <div>
          <h2 className="common_heading text-center">
            Potent Cannabis <span className="text_primary"> Alert</span>
          </h2>
          <p className="common_para text-center">
            click here to try our most potent hand picked craft cannabis
          </p>
        </div>
        <div className=" d-flex flex-column justify-content-center align-items-center position-relative">
          <div data-aos="flip-up" data-aos-duration="500" data-aos-offset="250">
            <img className="spaceman_image" src={spaceman} alt="spaceman" />{" "}
          </div>
          <button className="ff_montserrat fw_bold fs_xmd text-white primary_btn position-absolute alertbtn_set">
            Take me to space cannabis
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Alert;
