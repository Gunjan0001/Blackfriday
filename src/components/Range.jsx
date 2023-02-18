import React from "react";
import { Container } from "react-bootstrap";
import flower1 from "../assets/images/png/flower1.png";
import flower2 from "../assets/images/png/flower2.png";
const Range = () => {
  return (
    <>
      <section className="background py-5 ">
        <Container>
          <div className="shadow text-center py-5 my-md-5 position-relative z_index_2">
            <div className="position-absolute flower1_position d-none d-md-block">
              <img src={flower1} alt="flower" />
            </div>
            <div className="position-absolute flower2_position d-none d-md-block">
              <img src={flower2} alt="flower" />
            </div>
            <h2 className="common_heading pt-4">
              Our <span className="text_secondary">Range</span>
            </h2>
            <p className="common_para w_703 mx-auto">
              We have a variety of different recreational and medicinal items in
              our range, including cannabis, vapes, edibles, magic mushrooms,
              extracts, and CBD products, to help you unwind, have fun, and even
              do some valuable soul searching.
            </p>
            <p className="common_para w_703 mx-auto pb-5 mb-0">
              Whether you’re looking to order edibles online or browse for your
              new favorite strain, Purple Panda has got you covered.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Range;
