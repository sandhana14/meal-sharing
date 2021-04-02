import React from "react";
import { Link } from "react-router-dom";

const HostPage = () => {
  return (
    <div>
      <div className="background-image-host">
        <div className="host-text">
          <h2>
            "Hosts are at the heart of the Meal Sharing community, and we would
            love to talk with you if you think you might be a good fit to join
            our growing community."
          </h2>
        </div>
      </div>

      <div className="host-offers">
        <h2>Host experiences for free with MealSharing</h2>
        <ul className="list-host-experience">
          <li>Earn money cooking what you love</li>
          <li>Easy set up with no fixed-cost</li>
          <li>Join a global community of talented hosts</li>
          <li>Dedicated Community Manager to guide you</li>
        </ul>
        <Link to="/meals">
          <button className="become-host">Become a host</button>
        </Link>
      </div>
    </div>
  );
};

export default HostPage;
