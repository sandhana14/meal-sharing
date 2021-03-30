import React from "react";
import { useState } from "react";

const FormMeal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [maxReservation, setMaxReservation] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [message, setMessage] = useState("");

  const currentDateTime = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let min = today.getMinutes();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (hh < 10) hh = "0" + hh;
    if (min < 10) min = "0" + min;

    return yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + min;
  };

  const mealFormData = {
    title: title,
    description: description,
    location: location,
    when: timeDate,
    max_reservations: maxReservation,
    price: price,
  };

  async function postDataForMeals(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage("Your Meal is added,Best of luck!!!!!");
      }
      return response.json();
    } catch (error) {
      alert(error);
    }
  }

  const onChangeTitleHandle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeDescriptionHandle = (event) => {
    setDescription(event.target.value);
  };
  const onChangeLocationHandle = (event) => {
    setLocation(event.target.value);
  };
  const onChangePriceHandle = (event) => {
    setPrice(event.target.value);
  };
  const onChangeMaxReservationHandle = (event) => {
    setMaxReservation(event.target.value);
  };
  const onChangeTimeDateHandle = (event) => {
    setTimeDate(event.target.value);
  };
  const onSubmitHandle = (event) => {
    event.preventDefault();

    postDataForMeals("/api/meals", mealFormData)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setTitle("");
    setDescription("");
    setLocation("");
    setPrice("");
    setMaxReservation("");
    setTimeDate("");
  };

  return (
    <div className="form-meal-container">
      <div className="host-title">
        <h1>Become a host?</h1>
      </div>
      <form className="form-meal" onSubmit={onSubmitHandle}>
        <div>
          <label htmlFor="title">Meal title*</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={onChangeTitleHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="price">price*</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={onChangePriceHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="max_reservations">Maximum reservations*</label>
          <input
            id="max_reservations"
            type="number"
            value={maxReservation}
            onChange={onChangeMaxReservationHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="location">Location*</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={onChangeLocationHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="time">Available Time & Date*</label>
          <input
            id="time"
            type="datetime-local"
            value={timeDate}
            onChange={onChangeTimeDateHandle}
            min={currentDateTime()}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            type="text"
            value={description}
            onChange={onChangeDescriptionHandle}
            required
            rows="5"
            cols="47"
          >
            Enter the description here
          </textarea>
        </div>

        <div>
          <button className="add-meal-button" type="submit">
            Add a meal
          </button>
          {message && <h1 className="meal-added-message">{message}</h1>}
        </div>
      </form>
    </div>
  );
};

export default FormMeal;
