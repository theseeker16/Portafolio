import User from '../models/User-model';

export const createUser = async (req, res) => {
  const { name, email, age, description } = req.body;
  const newUser = new User({ name, email, age, description });
  console.log(newUser);

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
