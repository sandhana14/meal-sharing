import React from "react";
import { useState } from "react";

const FormReview = ({ mealId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ratings, setRatings] = useState(0);
  const [message, setMessage] = useState("");

  const reviewFormData = {
    title: title,
    description: description,
    meal_id: mealId,
    stars: ratings,
  };

  const onChangeTitleHandle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandle = (event) => {
    setDescription(event.target.value);
  };
  const onChangeRatingsHandle = (event) => {
    setRatings(event.target.value);
  };

  async function postDataForReviews(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage('"Thanks for your Ratings!!!"');
      }
      return response.json();
    } catch (error) {
      alert(error);
    }
  }

  const onSubmitHandle = (event) => {
    event.preventDefault();

    console.log(reviewFormData);

    postDataForReviews("/api/reviews", reviewFormData)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setTitle("");
    setDescription("");
    setRatings("");
  };

  return (
    <div className="form-review-container">
      <div className="review-form-title">
        <h2>Add a review</h2>
      </div>

      <form className="form-review" onSubmit={onSubmitHandle}>
        <div>
          <label htmlFor="title">Review title*</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={onChangeTitleHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="ratings">Ratings*</label>
          <select
            className="selectOptions"
            name="ratings"
            id="ratings"
            onChange={onChangeRatingsHandle}
          >
            <option>Choose a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            value={description}
            onChange={onChangeDescriptionHandle}
            rows="5"
            cols="47"
          >
            Enter the description here
          </textarea>
        </div>

        <div>
          <button className="add-review-button" type="submit">
            Add a review
          </button>
          {message && <h1 className="review-added-message">{message}</h1>}
        </div>
      </form>
    </div>
  );
};

export default FormReview;
