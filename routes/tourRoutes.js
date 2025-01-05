const express = require("express");
const {
  getAllTours,
  addTour,
  getATourById,
  updateATourById,
  deleteATourById,
} = require("./../controller/tourController");

const router = express.Router();

router.route("/").get(getAllTours).post(addTour);
router
  .route("/:id")
  .get(getATourById)
  .patch(updateATourById)
  .delete(deleteATourById);

module.exports = router;
