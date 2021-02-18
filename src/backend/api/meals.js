const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET http://localhost:5000/api/meals/-Select all the meals
router.get("/", async (request, response) => {
  const maxPrice = parseInt(request.query.maxPrice) || "1e500";
  const title = request.query.title || "";
  let availableReservations = eval(request.query.availableReservations);
  const limitValue = parseInt(request.query.limit) || 999999999999;
  let createdAfter = new Date(request.query.createdAfter);
  createdAfter = createdAfter > 0 ? createdAfter.toISOString() : 0;

  try {
    if (request.query.hasOwnProperty("availableReservations")) {
      if (availableReservations) {
        const mealsBookedBySomeone = await knex("meal")
          .select([
            "meal.title",
            "meal.max_reservations",
            knex.raw(
              'meal.max_reservations - sum(reservation.number_of_guests) as "available_reservations"'
            ),
          ])
          .sum("reservation.number_of_guests AS reserved")
          .join("reservation", "meal.id", "=", "reservation.meal_id")
          .groupBy("reservation.meal_id")
          .having(
            knex.raw(
              "meal.max_reservations > sum(reservation.number_of_guests)"
            )
          );

        const reservationMealId = knex("reservation").select("meal_id");
        const mealsNotBookedByAnyone = await knex("meal")
          .select("title", "max_reservations")
          .where("id", "not in", reservationMealId);
        return response.json(
          mealsNotBookedByAnyone.concat(mealsBookedBySomeone)
        );
      } else {
        return response
          .status(404)
          .send("There is no meal available for reservation");
      }
    }

    const meals = await knex("meal")
      .where("title", "like", `%${title}%`)
      .where("price", "<=", maxPrice)
      .where("created_date", ">", createdAfter)
      .limit(limitValue);
    return response.json(meals);
  } catch (error) {
    throw error;
  }
});

//POST http://localhost:5000/api/meals/ -Add a new meals
router.post("/", async (request, response) => {
  try {
    const insertedMeal = await knex("meal").insert(request.query);
    response.json(insertedMeal);
  } catch (error) {
    throw error;
  }
});

//GET http://localhost:5000/api/meals/2-select a specific meal
router.get("/:id", async (request, response) => {
  try {
    const mealWithSpecificId = await knex("meal").where({
      id: Number(request.params.id),
    });
    console.log(mealWithSpecificId);
    mealWithSpecificId.length !== 0
      ? response.json(mealWithSpecificId)
      : response.status(404).json("Id is not found");
  } catch (error) {
    throw error;
  }
});

//PUT http://localhost:5000/api/meals/3-Updating a meal by specific id
router.put("/:id", async (request, response) => {
  try {
    const UpdatingMealById = await knex("meal")
      .where({
        id: Number(request.params.id),
      })
      .update({ description: "Dal with spices" });
    response.json(UpdatingMealById);
  } catch (error) {
    throw error;
  }
});

//DELETE http://localhost:5000/api/meals/3-Deleting a meal with specific id
router.delete("/:id", async (request, response) => {
  try {
    const deletingMealWithSpecificId = await knex("meal")
      .where({
        id: Number(request.params.id),
      })
      .del();
    response.json(deletingMealWithSpecificId);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
