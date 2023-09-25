import React from "react";
import doctorIMG from "../Image/doctorImg.png"

export default function Project() {
  return (
    <div className="container-fluid  p-5 themeBg" id="projects">
          <h2 className="text-center text-white">Projects</h2>
      <div className="projects">
          <div className="project whiteBg" class="project-card">
            <img src={doctorIMG} className="w-100 rounded" alt="" />
            <h6 className="mx-3" class="project-title">Doctors Appointment Booking Website</h6>
              <ul>
                <li>Book Appointment</li>
                <li>Video Call</li>
                <li>Admin Page</li>
                <li>Add/Remove Doctor</li>
              </ul>
              {/* <span className="d-flex justify-content-center gap-5 ">
                <button className="btn bg-primary">Link</button>
                <button className="btn">Link</button>
        
              </span> */}
          </div>

        <div className="project whiteBg" class="project-card">
          {/* <p className="tip">Project 2</p>
          <p className="second-text">Lorem Ipsum</p> */}
        </div>
        <div className="project whiteBg mt=0" class="project-card">
          {/* <p className="tip">Project 3</p>
          <p className="second-text">Lorem Ipsum</p> */}
        </div>
      </div>
    </div>
  );
}
