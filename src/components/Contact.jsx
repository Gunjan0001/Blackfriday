import React from "react";
import { Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import leaves from "../assets/images/png/leaves.png";
import dailer from "../assets/images/png/dailer.png";
import msg from "../assets/images/png/message.png";
import gift from "../assets/images/png/gift.png";
const Contact = () => {
  return (
    <>
      <section className="bg_secondary py-2">
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
      </section>

      <section className="contact_background ">
        {" "}
        <Nav />
        <div className="py-5">
          <h2 className="ff_philosopher fw_regular  fs_2xl text-white text-center">
            Contact
          </h2>

          <p className="pb-5 mb-5 ff_montserrat fw_regular fs_base text-white text-center">
            Home > Contact
          </p>
        </div>
      </section>
      <section className="background py-3">
        <Container>
          <Row className=" align-items-center ">
            <div className="col-xl-6 col-lg-5">
              <img className="w-100" src={leaves} alt="leaf" />
            </div>

            <div className="col-xl-6 col-lg-6 ">
              <article className="contact_blur px-3 py-4">
                <h2 className=" ff_philosopher fw_bold fs_xl text-white">
                  Feel free to
                  <span className="text_primary"> contact us </span> anytime you
                  need our help.
                </h2>

                <p className=" ff_montserrat fw_regular fs_base text-white">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>

                <article className="flex-column flex-sm-row gap-3 d-flex justify-content-between py-4 mb-2">
                  <span className="">
                    <a
                      className=" ff_montserrat fw_semibold fs_base text-white"
                      href="#"
                    >
                      <img className="pe-2" src={dailer} alt="icon" />
                      1-888-726-3219
                    </a>
                  </span>

                  <span className="">
                    <a className="ff_montserrat fw_semibold fs_base text-white">
                      <img className="pe-2" src={msg} alt="icon" />
                      purplandagta. info@pon.me
                    </a>
                  </span>
                </article>

                <form className="" action="">
                  <label
                    className="w-100 d-sm-flex flex-row justify-content-between "
                    htmlFor=""
                  >
                    <input
                      className="w-50 blur_range rounded-2 px-4 py-2 me-2 mb-2 mb-sm-start common_para opacity_07"
                      type="text"
                      placeholder="First name"
                    />

                    <input
                      className="w-50 blur_range rounded-2 px-4 py-2 common_para opacity_07"
                      type="text"
                      placeholder="Last name"
                    />
                  </label>

                  <label
                    className="w-100 d-sm-flex flex-row justify-content-between mt-2 "
                    htmlFor=""
                  >
                    <input
                      className="w-50 blur_range rounded-2 px-4 py-2 me-2 mb-2 mb-sm-start common_para opacity_07"
                      type="text"
                      placeholder="Email address"
                    />

                    <input
                      className="w-50 blur_range rounded-2 px-4 py-2 common_para opacity_07"
                      type="text"
                      placeholder="Phone number"
                    />
                  </label>

                  <textarea
                    name=""
                    id=""
                    cols="5"
                    rows="3"
                    placeholder="Message..."
                    className="mt-2  w-100 blur_range px-4 py-2 mb-5 common_para opacity_07"
                  ></textarea>

                  <span className="">
                    <a
                      className="  px-4 py-2 fw_bold primary_btn ff_montserrat fs_md"
                      href="#"
                    >
                      SUBMIT
                    </a>
                  </span>
                </form>
              </article>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
