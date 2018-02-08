import User from '../models/User-model';

export const createUser = async (req, res) => {
  const { name, email, age, description } = req.body;
  const newUser = new User({ name, email, age, description });

  try {
    return res.status(201).json({ user: await newUser.save() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with user create' });
  }
};

export const getUser = async (req, res) => {
  try {
    return res.status(200).json({ user: await User.find({}).lean() });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with user information' });
  }
};

export const updateUser = async (req, res) => {
  try {
    return res.status(200).json({ user: await User.findByIdAndUpdate(req.params.userId, { name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      description: req.body.description }) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error updating the information of user' });
  }
};
