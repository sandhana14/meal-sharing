import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FormMeal from "./FormMeal";

const GetMeals = () => {
  const [meals, setMeals] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/api/meals/")
      .then((response) => response.json())
      .then((meal) => setMeals(meal));
  };

  const fetchReviewsData = () => {
    fetch("http://localhost:5000/api/reviews/")
      .then((response) => response.json())
      .then((review) => setReviews(review));
  };

  const reviewsAndMeals = (meal_id) => {
    const starRatings = reviews
      .filter((review) => {
        return review.meal_id === meal_id;
      })
      .map((star) => star.stars);

    const totalRatings = starRatings.reduce(
      (accumulator, current) => accumulator + current,
      0
    );

    const averageRatings = Math.ceil(totalRatings / starRatings.length);

    return averageRatings;
  };

  useEffect(() => {
    fetchData();
    fetchReviewsData();
  }, []);

  let recipeImages = [
    "https://static.toiimg.com/thumb/54308405.cms?imgsize=510571&width=800&height=800",
    "https://www.thecuriouschickpea.com/wp-content/uploads/2019/04/masoor-tadka-dal-3-480x480.jpg",
    "https://www.funfoodfrolic.com/wp-content/uploads/2020/07/Gulab-Jamun-Thumbnail.jpg",
    "https://blog.fatfreevegan.com/wp-content/uploads/2011/10/eat-the-rainbow-black-bean-soup-680-sq.jpg",
    "http://annetravelfoodie.com/wp-content/uploads/2016/01/Oatmeal-pizza.png",
    "https://www.thecuriouschickpea.com/wp-content/uploads/2018/03/malaikofta-4-720x720.jpg",
    "https://static.toiimg.com/thumb/54658627.cms?imgsize=296418&width=800&height=800",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2017/02/WHITE-SAUCE-PASTA-280x280.jpg",
  ];

  let randomImage = "https://static.toiimg.com/photo/52467119.cms";

  return (
    <>
      <div>
        <div className="card-holder">
          {meals.map((meal, index) => {
            return (
              <div key={meal.id} className="card">
                <div className="image">
                  <img
                    src={
                      recipeImages[index] ? recipeImages[index] : randomImage
                    }
                    alt="Recipe picture"
                  ></img>
                </div>
                <div>
                  <h3>{meal.title}</h3>
                </div>
                <hr />
                <div>
                  <p>{meal.price}DKK</p>
                </div>
                <hr />
                <div>
                  <p>{meal.location}</p>
                </div>
                <hr />
                {reviewsAndMeals(meal.id) ? (
                  <div className="ratings-star">
                    <span
                      className={
                        reviewsAndMeals(meal.id) >= 1 ? "highlighted" : ""
                      }
                    >
                      ★
                    </span>
                    <span
                      className={
                        reviewsAndMeals(meal.id) >= 2 ? "highlighted" : ""
                      }
                    >
                      ★
                    </span>
                    <span
                      className={
                        reviewsAndMeals(meal.id) >= 3 ? "highlighted" : ""
                      }
                    >
                      ★
                    </span>
                    <span
                      className={
                        reviewsAndMeals(meal.id) >= 4 ? "highlighted" : ""
                      }
                    >
                      ★
                    </span>
                    <span
                      className={
                        reviewsAndMeals(meal.id) >= 5 ? "highlighted" : ""
                      }
                    >
                      ★
                    </span>
                  </div>
                ) : (
                  <div>
                    <p>No reviews</p>
                  </div>
                )}
                <hr />
                <div>
                  <Link to={`/meals/${meal.id}`}>
                    <button>More Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <FormMeal />
        </div>
      </div>
    </>
  );
};

export default GetMeals;
