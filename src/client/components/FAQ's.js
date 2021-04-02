import React from "react";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="freq-ans-ques">
      <div>
        <h1>Help center</h1>
      </div>

      <div className="input-search-icon">
        <input type="text" placeholder="What are you looking for?"></input>
        <img
          className="search-icon"
          src="https://img.icons8.com/fluent-systems-regular/24/000000/google-web-search.png"
        />
      </div>

      <div className="questions-container">
        <div>
          <h3>Frequently Asked Questions</h3>
        </div>
        <ul>
          <li>What is Meal Sharing?</li>
          <li>How does Meal Sharing work?</li>
          <li>Where does Meal Sharing currently operate?</li>
          <li>Are experiences online or in-person?</li>
          <li>How can I sign up to be a host?</li>
          <li>What about my safety?</li>
          <li>How do I contact you?</li>
        </ul>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
