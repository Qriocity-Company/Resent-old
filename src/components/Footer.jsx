import React from "react";
import logo from "../assets/Resnet Logo White.png";

import fb from "../assets/facebook-f.svg";
import insta from "../assets/insta.png";
import twitter from '../assets/twitter.png'
import "../static/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer font-Sg mt-8">
        <div className="footer-section">
          <img src={logo} alt="" className="footer-logo h-[50px]" />
          <div className="footer-description pr-16">
          Elevate your operations, boost efficiency, and embrace the future of technology with AI Consulting Services.
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading text-[#FF0000]">Quick Links</div>
          <div className="footer-item-container">
            <Link className="footer-item" to="/">
              Home
            </Link>
            <Link className="footer-item" to="/about">
              About
            </Link>
            <Link className="footer-item" to="/caseStudies">
              Success Stories
            </Link>
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading  text-[#FF0000]">Success Stories</div>
          <div className="footer-item-container ">
            <Link className="footer-item" to="/caseStudy/documentation">
              Documentation Generation
            </Link>
            <Link className="footer-item" to="/caseStudy/dataAnalytics">
              Customer Integration
            </Link>
            <Link className="footer-item" to="/caseStudy/healthcare">
              AI in Healthcare
            </Link>
          </div>
        </div>

        <div className="footer-section ">
          {/* <p></p> */}
          <div className="mb-8">To get Frequent Updates on the Company's Vision and Products Dont Forget to Follow us on</div>
          <div className="footer-item-container socials">
            
            <a className="footer-item" href="https://www.instagram.com/resnetsolutions/" target="page">
              <img src={insta}></img>
              <div className="social-name">Instagram</div>
            </a>
            
          </div>
        </div>
      </footer>

      <div className="footer-bottom flex flex-col md:flex-row text-[14px]">
        <p> © 2023 Resnet Solutions Private Limited. </p>
        <p> All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer