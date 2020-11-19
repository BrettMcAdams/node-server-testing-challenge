const Users = require("../model/users-model");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const goo = await Users.findById(req.params.id);
    if (!goo) {
      return res.status(404).json({
        message: " not found",
      });
    }
    res.json(goo);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const goo = await Users.create(req.body);
    res.status(201).json(goo);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const goo = await Users.remove(req.params.id);
    if (!goo) {
      return res.status(404).json({
        message: "not found",
      });
    }
    res.json(goo);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
