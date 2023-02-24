import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import instractor1 from "../images/instactor-1.jpeg";
import instractor2 from "../images/instactor-2.jpeg";
import instractor3 from "../images/instactor-3.jpeg";
import instractor4 from "../images/instactor-4.jpeg";
import "./Instractor.css";
const Instractor = () => {
  return (
    <section id="team" class="team section-bg">
      <div class="container">
        <div className="section-title text-center mb-5">
          <h3>Our Instructor</h3>
          <span></span>
        </div>

        <div class="row justify-content-center ">
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={instractor1} class="img-fluid" alt="" />
                <div class="social">
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
              <div class="member-info">
                <h4>Daziy Millar </h4>
                <span>Android Programmer</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={instractor2} class="img-fluid" alt="" />
                <div class="social">
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
              <div class="member-info">
                <h4>Tom Steven</h4>
                <span>Engineering Mathematics</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={instractor3} class="img-fluid" alt="" />
                <div class="social">
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
              <div class="member-info">
                <h4>Rosy Janner</h4>
                <span>Data Scientist</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src={instractor4} class="img-fluid" alt="" />
                <div class="social">
                  <FaFacebook className="social-icon" />
                  <FaInstagram className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaYoutube className="social-icon" />
                  <FaTwitter className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaPinterest className="social-icon" />
                </div>
              </div>
              <div class="member-info">
                <h4>David Lee</h4>
                <span>Lenier Algebra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instractor;
