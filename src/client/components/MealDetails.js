import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormReservation from "./FormReservation";
import FormReview from "./FormReview";

const MealsById = () => {
  const params = useParams();
  const [specificMeal, setSpecificMeal] = useState([]);
  const [availableReservations, setAvailableReservations] = useState([]);
  const [displayReservationForm, setDisplayReservationForm] = useState(false);
  const [displayReviewForm, setDisplayReviewForm] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetch(`/api/meals/${params.id}`)
      .then((response) => response.json())
      .then((meal) => setSpecificMeal(meal))
      .catch((error) => console.log(error));
  };

  const fetchAvailableReservation = () => {
    fetch("/api/meals/?availableReservations=true")
      .then((response) => response.json())
      .then((reservations) => setAvailableReservations(reservations))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    fetchAvailableReservation();
  }, []);

  const specificMealReservations = availableReservations.filter(
    (meal) => meal.id === Number(params.id)
  );

  const onClickBookReservationHandle = () => {
    if (specificMealReservations.length === 0) {
      setError(true);
    } else {
      setDisplayReservationForm(true);
    }
  };

  const onClickReviewHandle = () => {
    setDisplayReviewForm(true);
  };

  return (
    <div>
      <div className="meals-info-reservation-form">
        <div className="meals-info column-one">
          {specificMeal.map((meal) => {
            return (
              <div key={meal.id}>
                <div className="specific-meal-title">
                  <h2>Information about the meal</h2>
                </div>

                {error && (
                  <div className="error-message">
                    <h1>"No available reservations for this meal"</h1>
                  </div>
                )}

                <div className="specific-meal-details">
                  <div>
                    <h3>Meal Name</h3>
                    <p>{meal.title}</p>
                  </div>
                  <div>
                    <h3>Meal description</h3>
                    <p>{meal.description}</p>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>{meal.location}</p>
                  </div>
                  <div>
                    <h3>Reservations</h3>
                    <p>{meal.max_reservations}</p>
                  </div>
                  <div>
                    <h3>Price</h3>
                    <p>{meal.price}</p>
                  </div>
                  <div>
                    <h3>Available time</h3>
                    <p>
                      {new Date(meal.when).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>

                  <div>
                    <button onClick={onClickBookReservationHandle}>
                      Book a reservation
                    </button>
                    <button
                      className="review-button"
                      onClick={onClickReviewHandle}
                    >
                      Give a review
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {displayReservationForm && (
          <div>
            <FormReservation
              specificMealReservations={specificMealReservations}
              mealId={params.id}
            />
          </div>
        )}
      </div>

      <div>{displayReviewForm && <FormReview mealId={params.id} />}</div>
    </div>
  );
};

export default MealsById;
