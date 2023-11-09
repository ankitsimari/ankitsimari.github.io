import React from "react";
import PDF from "../Image/Ankit.pdf";
import logo from "../Image/logo.png"
import whiteLogo from "../Image/ZoomLogo.png"
import ToggleBtn from "./ToggleBtn";
import styled from "styled-components";
import HamburgerIcon from "./HamburgerIcon";

export default function ({handleChange,icon,mobile}) {
  function closeCollapsibleMenu() {
    const navbarContent = document.getElementById("navbarSupportedContent");
    if (navbarContent.classList.contains("show")) {
      navbarContent.classList.remove("show");
    }
  }
  
  return (
    <div>
      {/* themeBg class in nav to add background color */}
      <nav
        className="navbar navbar-expand-lg  "
        id="nav-menu"
      >
        <div className="container ms-lg-5">
          <a className="navbar-brand ms-lg-5 fw-bold fs-3 p-0 m-0" href="#">
        <img style={{width:"50px"}} src={logo} alt="" />
          </a>
          {/* <DIV className="d-lg-none" style={{position:"absolute",right:"60px"}}>       
        <label className="switch">
  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
  <input type="checkbox" className="input" onChange={handleChange}/>
  <span className="slider"></span>
</label>
    </DIV> */}
          <button style={{position:"absolute",right:"60px"}} className="border-0 d-lg-none bg-transparent" onClick={handleChange}>{mobile}</button>
          <button
          style={{position:"absolute",right:"10px"}}
            className="border-0 d-lg-none bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <HamburgerIcon/>
            {/* <span className="navbar-toggler-icon text-white"></span> */}
          </button>
        </div>
        <div
          className="collapse navbar-collapse  mx-5 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 me-lg-5">
          <li className="nav-item">
              <a className="nav-link about fw-bold themeColor" href="#home"  onClick={closeCollapsibleMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link about fw-bold themeColor" href="#about"  onClick={closeCollapsibleMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link skills fw-bold themeColor"
                aria-disabled="true"
                href="#skills"
                onClick={closeCollapsibleMenu}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link projects fw-bold themeColor"
                aria-disabled="true"
                href="#projects"
                onClick={closeCollapsibleMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link contact fw-bold themeColor"
                aria-disabled="true"
                href="#contact "
                onClick={closeCollapsibleMenu}
              >
                Contact
              </a>
            </li>
            <li className="nav-item me-lg-5">
              <a className="nav-link resume fw-bold themeColor" target='_blank' href={PDF} id="resume-button-1"> 
                Resume
              </a>
            </li>
          </ul>
        {/* <ToggleBtn/> */}
        <button className="border-0 bg-transparent" onClick={handleChange}>{icon}</button>
        {/* <DIV className="d-none d-lg-flex">
        <label className="switch">
  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
  <input type="checkbox" className="input" onChange={handleChange}/>
  <span className="slider"></span>
</label>
    </DIV> */}
        </div>
      </nav>
    </div>
  );
}



const DIV = styled.div`
    .switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73C0FC;
  transition: .4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  border-radius: 20px;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
  transition: .4s;
}

.sun svg {
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

.moon svg {
  fill: #73C0FC;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

/* .switch:hover */.sun svg {
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
 
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* .switch:hover */.moon svg {
  animation: tilt 5s linear infinite;
}

@keyframes tilt {
 
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.input:checked + .slider {
  background-color: #183153;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #183153;
}

.input:checked + .slider:before {
  transform: translateX(30px);
}
`