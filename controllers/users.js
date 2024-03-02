const Users = require('../models/Users');

const getUser = async (req, res) => {
  const result = await Users.find();
  res.json(result);
};

const createuser = async (req, res) => {
  console.log('req.body',req.body)
  // const result = await Users.create(req.body);
  // return res.json(result);
};

const deleteUser = async (req, res) => {
  const result = await Users.findByIdAndDelete(req.params.id);
  return res.json(result);
};

const updateUser = async (req, res) => {
  const result = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.json(result);
};

const search = async (req, res) => {
  const result = await Users.find({
    name:req.query.name
  });
  return res.json(result);
};
module.exports = { getUser, createuser, deleteUser, updateUser ,search};
