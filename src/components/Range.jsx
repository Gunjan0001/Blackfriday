import React from "react";
import { Container } from "react-bootstrap";
import sideshadow from "../assets/images/png/sideshadow.png";
const Range = () => {
  return (
    <>
      <section
        className="background py-5  position-relative overflow-hidden  "
        id="shop"
      >
        <div className="position-absolute sideshadow d-none d-lg-block ">
          <img src={sideshadow} alt="sideshadow" />
        </div>
        <Container>
          <div className="range_background text-center py-5 my-md-5  border_range">
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="250"
            >
              <h2 className="common_heading pt-4">
                Our <span className="text_primary">Range</span>
              </h2>
              <p className="common_para w_703 mx-auto mt-5 mb-0">
                We have a variety of different recreational and medicinal items
                in our range, including cannabis, vapes, edibles, magic
                mushrooms, extracts, and CBD products, to help you unwind, have
                fun, and even do some valuable soul searching.
              </p>
              <p className="common_para w_703 mx-auto pb-5 mb-0 mt-4">
                Whether you’re looking to order edibles online or browse for
                your new favorite strain, Purple Panda has got you covered.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Range;
