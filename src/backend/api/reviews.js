const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET http://localhost:5000/api/reviews/-	Returns all reviews
router.get("/", async (request, response) => {
  try {
    const reviews = await knex("review");
    response.json(reviews);
  } catch (error) {
    throw error;
  }
});

//POST http://localhost:5000/api/reviews/ -Add a new review
router.post("/", async (request, response) => {
  try {
    const insertedReview = await knex("review").insert(request.query);
    response.json(insertedReview);
  } catch (error) {
    throw error;
  }
});

//GET http://localhost:5000/api/reviews/2-select a specific review
router.get("/:id", async (request, response) => {
  try {
    const reviewWithSpecificId = await knex("review").where({
      id: Number(request.params.id),
    });
    reviewWithSpecificId.length !== 0
      ? response.json(reviewWithSpecificId)
      : response.status(404).json("Id is not found");
  } catch (error) {
    throw error;
  }
});

//PUT http://localhost:5000/api/reviews/3-Updating a review by specific id
router.put("/:id", async (request, response) => {
  try {
    const UpdatingReviewById = await knex("review")
      .where({
        id: Number(request.params.id),
      })
      .update({ stars: 2 });
    response.json(UpdatingReviewById);
  } catch (error) {
    throw error;
  }
});

//DELETE http://localhost:5000/api/reviews/3-Deleting a review with specific id
router.delete("/:id", async (request, response) => {
  try {
    const deletingReviewWithSpecificId = await knex("review")
      .where({
        id: Number(request.params.id),
      })
      .del();
    response.json(deletingReviewWithSpecificId);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
