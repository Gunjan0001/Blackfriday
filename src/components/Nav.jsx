import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import search from "../assets/images/png/search.png";
import deletebox from "../assets/images/png/deletebox.png";
const Nav = () => {
  const [openNav, setopenNav] = useState(true);
  if (openNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <nav className="position-relative py-3">
        <Container>
          {" "}
          <div className="d-flex align-items-center justify-content-between ">
            <ul className="ps-0 mb-0 d-flex align-items-center">
              <li>
                <a href="#">
                  <img className="logo_wh" src={logo} alt="logo" />
                </a>
              </li>
            </ul>

            <ul className="ps-0 mb-0 d-none d-lg-flex gap-4 align-items-center ">
              <li>
                <a
                  href="#"
                  className="  ff_montserrat  fw_regular  fs_base text-white nav_links"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" ff_montserrat  fw_regular  fs_base  text-white nav_links"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" ff_montserrat  fw_regular  fs_base  text-white nav_links"
                >
                  ABOUT
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className=" ff_montserrat  fw_regular   fs_base text-white nav_links"
                >
                  CONTACT
                </a>
              </li>{" "}
              <li>
                <a
                  href="#"
                  className="  ff_montserrat  fw_regular  fs_base text-white nav_links"
                >
                  FAQ
                </a>
              </li>{" "}
              <Form className="form_shadow d-flex align-items-center px-2 py-1">
                <input
                  type="text"
                  placeholder="Search here.."
                  className="bg-transparent border-0 outline ff_montserrat  fw_regular fs_sm text-white"
                />
                <img src={search} alt="search" />
              </Form>{" "}
              <li>
                <a href="#">
                  <img src={deletebox} alt="dltbox" />{" "}
                </a>
              </li>
              <button className=" primary_btn ff_montserrat  fw_bold fs_md ">
                SIGN IN
              </button>
            </ul>

            <button
              onClick={() => setopenNav(false)}
              className="d-flex justify-content-evenly flex-column d-lg-none menu_btn"
            >
              <span className="menu_line"></span>
              <span className="menu_line"></span>
              <span className="menu_line"></span>
            </button>
          </div>
        </Container>
        <div
          className={
            openNav ? "showNav d-lg-none d-block" : "hideNav d-lg-none d-block"
          }
        >
          <ul className="ps-0 mb-0 position-relative d-flex gap-5 justify-content-center w-100 min-vh-100 flex-column align-items-center">
            <button
              onClick={() => setopenNav(true)}
              className="btn btn-close fs-4 position-absolute top-0 end-0 mt-4 me-4"
            ></button>
            <li>
              <a
                href="#"
                className="  ff_montserrat  fw_regular  fs_base text-white nav_links"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" ff_montserrat  fw_regular  fs_base  text-white nav_links"
              >
                SHOP
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" ff_montserrat  fw_regular  fs_base  text-white nav_links"
              >
                ABOUT
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className=" ff_montserrat  fw_regular   fs_base text-white nav_links"
              >
                CONTACT
              </a>
            </li>{" "}
            <li>
              <a
                href="#"
                className="  ff_montserrat  fw_regular  fs_base text-white nav_links"
              >
                FAQ
              </a>
            </li>{" "}
            <Form className="form_shadow d-flex align-items-center px-2 py-1">
              <input
                type="text"
                placeholder="Search here.."
                className="bg-transparent border-0 outline ff_montserrat  fw_regular fs_sm text-white"
              />
              <img src={search} alt="search" />
            </Form>{" "}
            <li>
              <a href="#">
                <img src={deletebox} alt="dltbox" />{" "}
              </a>
            </li>
            <button className=" primary_btn ff_montserrat  fw_bold fs_md ">
              SIGN IN
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
