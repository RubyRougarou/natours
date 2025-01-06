const express = require("express");
const {
  getAllTours,
  addTour,
  getATourById,
  updateATourById,
  deleteATourById,
  checkId,
} = require("./../controller/tourController");

const router = express.Router();

router.param("id", checkId);

router.route("/").get(getAllTours).post(addTour);
router
  .route("/:id")
  .get(getATourById)
  .patch(updateATourById)
  .delete(deleteATourById);

module.exports = router;
