import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="background-image-contact">
        <div className="contact-details">
          <h1 className="contact-title">Come say hello!</h1>
          <div className="social-media-contact-icons">
            <div>
              <img src="https://img.icons8.com/cute-clipart/64/000000/facebook-new.png" />
              <span>
                Connect with others and discover how MealShare is changing lives
                all over the world.
              </span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/64/000000/twitter.png" />
              <span>Be in the know on the latest news, tips, and tricks.</span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png" />
              <span>
                It's more like visual which actually enhances your overall
                satisfaction with a dish
              </span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" />
              <span>
                See who you know at Meal Sharing, leverage your professional
                network, and get hired.
              </span>
            </div>
          </div>

          <div className="contact-address">
            <div>
              <img src="https://img.icons8.com/doodle/48/000000/address.png" />
              <span>Hammelstrupvej 41,2400 Valby,Denmark</span>
            </div>

            <div>
              <img src="https://img.icons8.com/color/48/000000/coworking.png" />
              <span>15 employees</span>
            </div>

            <div>
              <img src="https://img.icons8.com/doodle/48/000000/internet--v1.png" />
              <span>www.mealsharing.com</span>
            </div>

            <div>
              <img src="https://img.icons8.com/fluent/48/000000/add-contact-to-company.png" />
              <span>+45-12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
