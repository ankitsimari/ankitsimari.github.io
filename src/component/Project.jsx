import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {BsGithub} from "react-icons/bs";
import {TbWorldShare} from "react-icons/tb"


const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects">
    <div className="grayBg p-4" >
      <h1 className="name text-center fs-2 fw-bold">
        My <span className="themeColor">Projects</span>
      </h1>
      <br />
      <div data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000" className="blog-card project-card">
        <div className="meta">
          <div
            className="photo"
          >
            <img className="h-100 w-100" src="https://i.ibb.co/9Z9H2n5/doctor-Img.png" alt="" />
          </div>
        </div>
        <div className="description">
          <h1 style={{ fontWeight: 'bold' }} className="project-title" >MediCare</h1>
          <h2 className="project-tech-stack" >React | Bootstrap | Material UI</h2>
          <p className="project-description" >
            {" "}
            MediCare is an online platform designed to simplify the process of booking appointments with doctors. Our website aims to bridge the gap between patients and healthcare providers, offering a user-friendly experience for all.
          </p>
          <p className="read-more">
            <a className="project-deployed-link" href="https://teal-board-7169-ankit-doc-web.vercel.app/" target="_blank">
          <TbWorldShare className="fs-3"/>
            </a>
            <a className="project-github-link" href="https://github.com/ankitsimari/teal-board-7169" target="_blank">
          <BsGithub className="fs-3"/>
            </a>
          </p>
        </div>
      </div>
      <div data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000" className=" blog-card  project-card alt">
        <div className="meta">
          <div
            className="photo "
          >
            <img className="h-100 w-100" src="https://i.ibb.co/CKW8t9M/home.png" alt="" />
          </div>
        </div>
        <div className="description">
          <h1 style={{ fontWeight: 'bold' }} className="project-title" >EcoFood</h1>
          <h2 className="project-tech-stack">React | Redux | Material UI</h2>
          <p  className="project-description">
          Welcome to the EcoFood Fresh Food Website! eco-friendly food delivery solution. We connect food lovers with sustainable, delicious meals and grocery. Enjoy a user-friendly platform that nourishes you and the planet!
          </p>
          <p className="read-more">
            <a className="project-deployed-link" href="https://ecofoodankit.vercel.app/" target="_blank" >
            <TbWorldShare className="fs-3"/>
            </a>
            <a className="project-github-link" href="https://github.com/ankitsimari/sleek-circle-8356" target="_blank">
            <BsGithub className="fs-3"/>
            </a>
          </p>
        </div>
      </div>
      <div data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000" className="blog-card  project-card">
        <div className="meta">
          <div
            className="photo"
          >
            <img className="h-100 w-100" src="https://i.ibb.co/frz0c3G/hh.png" alt="" />
          </div>
        </div>
        <div className="description">
          <h1 style={{ fontWeight: 'bold' }} className="project-title" >Learning Home</h1>
          <h2 className="project-tech-stack">HTML | CSS | JavaScript</h2>
          <p className="project-description">
            {" "}
            Welcome to Learning Home, your online education hub. We provide a convenient and enriching e-learning experience. Empower yourself with knowledge from the comfort of your own 'Learning Home
          </p>
          <p className="read-more">
            <a className="project-deployed-link" href="https://ankitkumarsimri.netlify.app/" target="_blank">
            <TbWorldShare className="fs-3"/>
            </a>
            <a className="project-github-link" href="https://github.com/ankitsimari/spiffy-pail-5202" target="_blank">
            <BsGithub className="fs-3"/>
            </a>
          </p>
        </div>
      </div>
      <div data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="1000" className=" blog-card alt project-card">
        <div className="meta">
          <div
            className="photo"
          >
            <img className="h-100 w-100" src="https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif" alt="" />
          </div>
        </div>
        <div className="description">
          <h1 style={{ fontWeight: 'bold' }} className="project-title" >In Progress</h1>
          <h2 className="project-tech-stack">... | ... | ...</h2>
          <p className="project-description">
          Stay tuned for my upcoming ventures, set to revolutionize with state-of-the-art technology. Keep an eye out for the latest updates and innovations.
          </p>
          <p className="read-more">
            <a className="project-deployed-link" href="#" target="_blank" >
            <TbWorldShare className="fs-3"/>
            </a>
            <a className="project-github-link" href="#" target="_blank">
            <BsGithub className="fs-3"/>
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;