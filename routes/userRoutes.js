const express = require("express");
const {
  getAllUsers,
  addUser,
  getAUser,
  updateAUser,
  deleteAUser,
} = require("./../controller/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getAUser).patch(updateAUser).delete(deleteAUser);

module.exports = router;
