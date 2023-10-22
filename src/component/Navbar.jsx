import React from "react";
import PDF from "../Image/Ankit.pdf";
import logo from "../Image/logo.png"
import whiteLogo from "../Image/ZoomLogo.png"

export default function () {
  return (
    <div>
      {/* themeBg class in nav to add background color */}
      <nav
        className="navbar navbar-expand-lg navbar-light themeBg"
        id="nav-menu"
      >
        <div className="container ms-4 ms-lg-5">
          <a className="navbar-brand ms-lg-5 fw-bold fs-3 p-0 m-0" href="#">
        <img style={{width:"50px",transition:"scale(7)"}} src={whiteLogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse  mx-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-lg-5">
            <li className="nav-item">
              <a
                className="nav-link home fw-bold text-black"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link about fw-bold text-black" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link skills fw-bold text-black"
                aria-disabled="true"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link projects fw-bold text-black"
                aria-disabled="true"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link contact fw-bold text-black"
                aria-disabled="true"
                href="#contact "
              >
                Contact
              </a>
            </li>
            <li className="nav-item me-lg-5">
              <a className="nav-link resume fw-bold text-black" target='_blank' href={PDF} id="resume-button-1">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
