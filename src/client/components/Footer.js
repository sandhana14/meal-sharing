import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-first column-one">
          <div className="footer-logo-text">
            <div className="logo">
              <img src="https://img.icons8.com/fluent/48/000000/real-food-for-meals.png" />
            </div>
            <div>
              <h2>Meal-sharing</h2>
            </div>
          </div>

          <div className="footer-icons column-two">
            <div className="app-store column-two">
              <div>
                <img src="https://img.icons8.com/ios-filled/50/000000/apple-app-store--v1.png" />
                <h4>App Store</h4>
              </div>
              <div>
                <img src="https://img.icons8.com/ios/50/000000/google-play--v1.png" />
                <h4>Google Play</h4>
              </div>
            </div>
            <div className="social-media-icons column-one">
              <img src="https://img.icons8.com/android/24/000000/facebook-new.png" />
              <img src="https://img.icons8.com/android/24/000000/twitter.png" />
              <img src="https://img.icons8.com/metro/26/000000/instagram-new.png" />
              <img src="https://img.icons8.com/android/24/000000/linkedin.png" />
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footer-second">
          <div>
            <h3 className="footer-second-title">Company</h3>
            <ul>
              <Link to="/about" className="link">
                <li>About us</li>
              </Link>
              <Link to="/howitworks" className="link">
                <li>How it works</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="footer-second-title">Help & Support</h3>
            <ul>
              <Link to="/frequentlyaskedquestions" className="link">
                <li>FAQ's</li>
              </Link>
              <Link to="/contact" className="link">
                <li>Contact us</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="footer-second-title">Join Us</h3>
            <ul>
              <Link to="/host" className="link">
                <li>Become a host</li>
              </Link>
              <Link to="/becomeanambassador" className="link">
                <li>Become an Ambassador</li>
              </Link>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="footer-last">
          <p>
            <strong>Meal Sharing - © Copyright 2021</strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
