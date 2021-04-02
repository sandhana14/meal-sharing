import React from "react";
const About = () => {
  return (
    <div>
      <div>
        <img
          className="about-meal-sharing-image"
          src="https://www.spsp.org/sites/default/files/plateshare-blogpost.jpg"
          alt="Group of people sharing food picture"
        />
      </div>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-info">
        <p>
          Meal Sharing operates an online meal sharing platform that brings
          travelers and locals to connect with each other over home-cooked. From
          home-cooks and food lovers to MasterChefs and Michelin-starred chefs,
          our hosts all share one special ingredient: a passion for bringing
          people together through food.We believe there is nothing more special
          than breaking bread with new friends, and we love spreading the magic
          of social dining with our growing community.
        </p>
        <p>
          To help you experience local cuisine while traveling, Meal sharing
          offers in-home meals with our hosts. In addition, we also offer
          in-home cooking experiences as well as market visits as an add-on to
          many of the meal experiences. All of our hosts have been vetted to
          ensure a safe and delightful culinary experience.
        </p>
      </div>
    </div>
  );
};

export default About;
