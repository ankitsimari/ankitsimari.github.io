import React from "react";
import doctorIMG from "../Image/doctorImg.png";
import {BsBrowserChrome,BsGithub} from "react-icons/bs"

export default function Projects({ img, alt }) {
  return (
    <div className="container">
      <h3>Projects</h3>
      <div className="row gap-3 justify-content-center">

        <div className="project_card col-md-5 mx-4 shadow h-auto">
          <img className="img-fluid " src={doctorIMG} alt={alt} />
          <div className="card__content">
            <p className="card__title">MediCare</p>
            <p className="card__description">
            This platform aims to provide a convenient and efficient way for patients to book appointments with doctors online. With features such as user authentication, appointment scheduling, video calls, and administrative control.
            </p>
            <span className="d-flex justify-content-end ">
              <button className="btn m-1"><BsBrowserChrome/></button>
              <button className="btn m-1"><BsGithub/></button>
            </span>
          </div>
        </div>
        <div className="project_card col-md-5 mx-4 shadow h-auto">
          <img className="img-fluid " src={doctorIMG} alt={alt} />
          <div className="card__content">
            <p className="card__title">MediCare</p>
            <p className="card__description">
            This platform aims to provide a convenient and efficient way for patients to book appointments with doctors online. With features such as user authentication, appointment scheduling, video calls, and administrative control.
            </p>
            <span className="d-flex justify-content-end ">
              <button className="btn m-1"><BsBrowserChrome/></button>
              <button className="btn m-1"><BsGithub/></button>
            </span>
          </div>
        </div>
        <div className="project_card col-md-5 mx-4 shadow h-auto">
          <img className="img-fluid " src={doctorIMG} alt={alt} />
          <div className="card__content">
            <p className="card__title">MediCare</p>
            <p className="card__description">
            This platform aims to provide a convenient and efficient way for patients to book appointments with doctors online. With features such as user authentication, appointment scheduling, video calls, and administrative control.
            </p>
            <span className="d-flex justify-content-end ">
              <button className="btn m-1"><BsBrowserChrome/></button>
              <button className="btn m-1"><BsGithub/></button>
            </span>
          </div>
        </div>
        <div className="project_card col-md-5 mx-4 shadow h-auto">
          <img className="img-fluid " src={doctorIMG} alt={alt} />
          <div className="card__content">
            <p className="card__title">MediCare</p>
            <p className="card__description">
            This platform aims to provide a convenient and efficient way for patients to book appointments with doctors online. With features such as user authentication, appointment scheduling, video calls, and administrative control.
            </p>
            <span className="d-flex justify-content-end ">
              <button className="btn m-1"><BsBrowserChrome/></button>
              <button className="btn m-1"><BsGithub/></button>
            </span>
          </div>
        </div>



      </div>
    </div>
  );
}
