import Employee from "../models/employee.model.js";

export const getAll = async (req, res) => {
  const list = await Employee.find();
  res.json(list);
};

export const createOne = async (req, res) => {
  const emp = await Employee.create(req.body);
  res.status(201).json(emp);
};

// updateOne, deleteOne … same pattern
