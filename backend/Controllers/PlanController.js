import Plan from '../models/Plan.js'; // Adjust the path as needed
import User from '../models/User.js'; // Adjust the path as needed

// Create a new plan
export const createPlan = async (req, res) => {
  try {
    const { userId, ...planData } = req.body;

    // Ensure user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create the plan
    const plan = new Plan({ user: userId, ...planData });
    await plan.save();

    return res.status(201).json({ message: "Plan Created Succesfully" });
  } catch (error) {
    console.error('Error creating plan:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Retrieve a plan by ID with user details
export const getPlanById = async (req, res) => {
  try {
    const { id } = req.params;
    const plan = await Plan.findById(id).populate('user').exec();

    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    return res.status(200).json(plan);
  } catch (error) {
    console.error('Error retrieving plan:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// List all plans
export const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find().populate('user').exec();
    return res.status(200).json(plans);
  } catch (error) {
    console.error('Error listing plans:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
