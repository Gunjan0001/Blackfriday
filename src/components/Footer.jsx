import React from "react";
import { Container } from "react-bootstrap";
import footer_logo from "../assets/images/png/footerlogo.png";
const Footer = () => {
  return (
    <>
      <section className="footer_background py-5 overflow-hidden  ">
        <Container>
          <div className="text-center">
            <div
              data-aos="flip-left"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <img src={footer_logo} alt="footrer_logo" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <p className="common_para mw_643 mx-auto pt-3">
                Tempor cras et scelerisque bibendum. Sapien proin pharetra
                iaculis cras massa auctor turpis. Eget massa imperdiet sit
                massa. Hac sit nec.
              </p>
              <div className="d-flex align-items- text-center justify-content-center gap-4 pt-3 mb-3">
                <p className="ff_montserrat fw_semibold fs_base text-white cursor_pointer ">
                  SHOP
                </p>
                <p className="ff_montserrat fw_semibold fs_base text-white cursor_pointer ">
                  ABOUT
                </p>
                <p className="ff_montserrat fw_semibold fs_base text-white cursor_pointer ">
                  CONTACT
                </p>
              </div>
              <p className="mt-5  mb-0 ff_montserrat fw_regular fs_sm text-white cursor_pointer">
                copyright2022purplepanda
              </p>
            </div>
          </div>
        </Container>
        <div className="bigline w-100"></div>
      </section>
    </>
  );
};

export default Footer;
