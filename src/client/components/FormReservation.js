import React from "react";
import { useState } from "react";

const FormReservation = ({ specificMealReservations, mealId }) => {
  const [name, setName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const reservationsFormData = {
    number_of_guests: guests,
    meal_id: mealId,
    contact_phonenumber: contactnumber,
    contact_name: name,
    contact_email: email,
  };

  async function postDataForReservations(url, data) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage("Your reservation is booked!!!!!");
      }
      return response.json();
    } catch (error) {
      alert(error);
    }
  }

  const onChangeNameHandle = (event) => {
    setName(event.target.value);
  };

  const onChangeContactNumberHandle = (event) => {
    setContactNumber(event.target.value);
  };

  const onChangeEmailHandle = (event) => {
    setEmail(event.target.value);
  };

  const onChangeGuestsHandle = (event) => {
    setGuests(event.target.value);
  };

  const onSubmitFormHandle = (event) => {
    event.preventDefault();

    postDataForReservations("/api/reservations", reservationsFormData)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setName("");
    setContactNumber("");
    setEmail("");
    setGuests("");
  };
  return (
    <div className="reservation-form column-one">
      <div className="reservation-title">
        <h2>Book a Reservation</h2>
      </div>
      <div className="available-reservations">
        <h3>
          Available Reservations :
          <span>
            {specificMealReservations.map((meal) => {
              return meal.available_reservations
                ? meal.available_reservations
                : meal.max_reservations;
            })}
          </span>
        </h3>
      </div>
      <form className="form-reservation" onSubmit={onSubmitFormHandle}>
        <div>
          <label htmlFor="name">Contact Name*</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={onChangeNameHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="contact-number">Contact Number*</label>
          <input
            id="contact-number"
            type="tel"
            pattern="[+][0-9]{2}-[0-9]{8}"
            value={contactnumber}
            onChange={onChangeContactNumberHandle}
            required
          ></input>
          <small>Format: +45-12345678</small>
        </div>

        <div>
          <label htmlFor="contact-email">Contact Email*</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={onChangeEmailHandle}
            required
          ></input>
        </div>

        <div>
          <label htmlFor="guests">Number of guests*</label>
          <input
            id="guests"
            type="number"
            min="0"
            max={specificMealReservations.map((meal) => {
              return meal.available_reservations
                ? meal.available_reservations
                : meal.max_reservations;
            })}
            value={guests}
            onChange={onChangeGuestsHandle}
            required
          ></input>
        </div>

        <div>
          <button className="add-reservation-button" type="submit">
            Add a reservation
          </button>
          {message && <h1 className="reservation-booked-message">{message}</h1>}
        </div>
      </form>
    </div>
  );
};
export default FormReservation;
