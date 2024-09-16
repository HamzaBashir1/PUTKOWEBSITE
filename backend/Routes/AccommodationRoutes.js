import express from 'express';
import { authenticate, restrict } from '../auth/verifyToken.js';
import {
  createAccommodation,
  getAccommodations,
  getAccommodationById,
  updateAccommodation,
  deleteAccommodation
} from '../Controllers/AccommodationController.js';

const router = express.Router();

// Protected routes (require authentication)
router.post("/accommodation", createAccommodation);
router.get("/accommodation", getAccommodations);
router.get("/accommodation/:id", getAccommodationById);
router.put("/accommodation/:id", updateAccommodation);
router.delete("/accommodation/:id", deleteAccommodation);

export default router;
