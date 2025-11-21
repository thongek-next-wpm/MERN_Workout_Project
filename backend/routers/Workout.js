const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// Define a route to get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// get a single workout by ID
router.get("/:id", (req, res) => {
  res.json({ message: `Get workout with ID: ${req.params.id}` });
});

// Create a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    workout.save();
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  res.json({ message: "Create a new workout" });
});

// Delete a workout by ID
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete workout with ID: ${req.params.id}` });
});

// Update a workout by ID
router.patch("/:id", (req, res) => {
  res.json({ message: `Update workout with ID: ${req.params.id}` });
});

module.exports = router;
