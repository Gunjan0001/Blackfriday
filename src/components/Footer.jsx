import React from "react";
import { Container } from "react-bootstrap";
import footer_logo from "../assets/images/png/footerlogo.png";
const Footer = () => {
  return (
    <>
      <section className="footer_background py-5">
        <Container>
          <div className="text-center">
            <img src={footer_logo} alt="footrer_logo" />
            <p className="common_para mw_643 mx-auto pt-3">
              Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
              cras massa auctor turpis. Eget massa imperdiet sit massa. Hac sit
              nec.
            </p>
            <div className="d-flex align-items- text-center justify-content-center gap-4 pt-3 mb-3">
              <p className="ff_montserrat fw_semibold fs_base text-white">
                SHOP
              </p>
              <p className="ff_montserrat fw_semibold fs_base text-white">
                ABOUT
              </p>
              <p className="ff_montserrat fw_semibold fs_base text-white">
                CONTACT
              </p>
            </div>
            <p className="mt-5 pt-2 mb-0">copyright2022purplepanda</p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
