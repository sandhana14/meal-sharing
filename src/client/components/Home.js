import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <h2 className="blink-home-text">
          Welcome to the Meal sharing family😊
        </h2>
      </div>
      <div className="main-image">
        <img
          src="https://www.heart.org/-/media/images/healthy-living/healthy-eating/superfoods.png"
          alt="Meals-picture"
        ></img>
      </div>
      <div>
        <div className="first-para-pic">
          <p className="home-first-para">
            Hosts open their homes to guests who are looking to enjoy some tasty
            local grub. Invitees can round up friends to join in on the meal or
            arrive solo and meet cool new people at the dinner table. Guests are
            encouraged to bring a gift to the host, or chip in with a suggested
            amount of money.
          </p>
          <img
            className="cooking-image-home-first"
            src="https://media1.s-nbcnews.com/i/newscms/2019_50/3146046/191212-stock-kitchen-cooking-wok-ew-228p_02b448af054ee73a0103f9b0353a525f.jpg"
            alt="Cooking picture"
          />
        </div>
        <div className="second-para-pic">
          <p className="home-second-para">
            Customized food experiences await intrepid travelers who are looking
            for a dose of bona fide local culture. Let’sLunch focuses on
            face-to-face meetings to expand professional business networks.
            Let’sLunch plays matchmaker by using information from members’
            LinkedIn profiles to set up power lunches with like-minded
            individuals in related fields.
          </p>
          <img
            className="cooking-image-home-second"
            src="https://assets.bonappetit.com/photos/5e7a6c79edf206000862e452/16:9/w_2287,h_1286,c_limit/Cooking-Home-Collection.jpg"
            alt="Cooking picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
