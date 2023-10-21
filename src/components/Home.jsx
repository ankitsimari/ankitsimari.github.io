import React from "react";

import myimg from "../assests/my img.jpeg";
import myimg1 from "../assests/me.png";
import { Link } from "react-router-dom";

function Home() {

  const resumedown2 = () => {
    window.open(
      "https://drive.google.com/file/d/1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG/view?usp=sharing",
      "_blank"
      
    );
  };



  return (
    <div id="home">

  
      <div className="my-info">
        <h2>Hey there! </h2>
        <h1 id="user-detail-name">I am Ankit Kumar</h1>
        <Link
            className="nav-link resume"
            to="https://drive.google.com/uc?export=download&id=1UBgt4cfEWrtO6DkeT8boJlXNJqLDL3kG"
          >
            <button
              id="resume-button-2"
              style={{ border: "none", fontWeight: "bold", fontSize: "20px" }}
              onClick={resumedown2}
            >
              Resume
            </button>
          </Link>
      </div>
      <div >
        <img className="home-img" src="https://scontent.fpat2-3.fna.fbcdn.net/v/t1.6435-9/71375061_1210739545779525_5244483835277606912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_ohc=DagPk2XX8mcAX9USTCf&_nc_ht=scontent.fpat2-3.fna&oh=00_AfBYoZR0FIX6on3A-SbhJpg0aWG8dGVfm56lP7EX3TsdfA&oe=655B80FC" alt="" />
      </div>

    </div>
  );
}

export default Home;
