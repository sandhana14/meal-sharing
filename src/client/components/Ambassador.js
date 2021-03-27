import React from "react";

const Ambassador = () => {
  return (
    <div>
      <div className="ambassador-message">
        <h2>
          Our ambassadors are expats, travelers and photographers passionate
          about tasting delicious food and learning about culinary traditions.
          Sound like you? Tell us more.
        </h2>
      </div>

      <div className="ambassador-application-process">
        <h2>Application process</h2>
        <ol className="app-list-process">
          <li>Submit online application form</li>
          <li> Interview with our ambassador program lead</li>
          <li>Schedule a training session</li>
          <li>Meet with amazing hosts from around the world!</li>
        </ol>
      </div>
    </div>
  );
};

export default Ambassador;
