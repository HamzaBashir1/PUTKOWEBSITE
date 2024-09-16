import Accommodation from "../models/Accommodation.js";

// Create a new accommodation
export const createAccommodation = async (req, res) => {
  try {
    // Since authentication is removed, we don't get userId from req.user
    const accommodationData = req.body;

    const accommodation = new Accommodation(accommodationData);
    await accommodation.save();
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all accommodations
export const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find().populate('userId', 'name email'); // Optionally populate user info
    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get accommodation by ID
export const getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id).populate('userId', 'name email');
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json(accommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an accommodation by ID
export const updateAccommodation = async (req, res) => {
  try {
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('userId', 'name email'); // Populate user info in response

    if (!updatedAccommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json(updatedAccommodation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete accommodation by ID
export const deleteAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByIdAndDelete(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: "Accommodation not found" });
    }
    res.status(200).json({ message: "Accommodation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
