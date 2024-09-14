import express from 'express';
import { createPlan, getPlanById, getAllPlans } from '../Controllers/PlanController.js'; // Adjust the path as needed

const router = express.Router();

// Create a new plan
router.post('/plans', createPlan);

// Retrieve a plan by ID
router.get('/plans/:id', getPlanById);

// List all plans
router.get('/plans', getAllPlans);

export default router;
