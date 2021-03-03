const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET http://localhost:5000/api/reservations/-	Returns all reservations
router.get("/", async (request, response) => {
  try {
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

//POST http://localhost:5000/api/reservations/ -Add a new reservation
router.post("/", async (request, response) => {
  try {
    const insertedReservation = await knex("reservation").insert(request.body);
    response.json(insertedReservation);
  } catch (error) {
    throw error;
  }
});

//GET http://localhost:5000/api/meals/2-select a specific meal
router.get("/:id", async (request, response) => {
  try {
    const reservationWithSpecificId = await knex("meal").where({
      id: Number(request.params.id),
    });
    reservationWithSpecificId.length !== 0
      ? response.json(reservationWithSpecificId)
      : response.status(404).json("Id is not found");
  } catch (error) {
    throw error;
  }
});

//PUT http://localhost:5000/api/meals/3-Updating a reservation by specific id
router.put("/:id", async (request, response) => {
  try {
    const UpdatingReservationById = await knex("reservation")
      .where({
        id: Number(request.params.id),
      })
      .update(request.body);
    response.json(UpdatingReservationById);
  } catch (error) {
    throw error;
  }
});

//DELETE http://localhost:5000/api/meals/3-Deleting a reservation with specific id
router.delete("/:id", async (request, response) => {
  try {
    const deletingreservationWithSpecificId = await knex("reservation")
      .where({
        id: Number(request.params.id),
      })
      .del();
    response.json(deletingreservationWithSpecificId);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
