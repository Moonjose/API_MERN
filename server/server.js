const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/User');


const app = express();

mongoose.connect(process.env.ATLAS_URI);

app.use(cors());
app.use(express.json());

// Routes ----------------------------------
app.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(400).json({ errors: `${error}` });
  }
});

app.post('/new', async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    res.json('User Created');
  } catch (error) {
    res.status(400).json({ errors: `${error}` });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    const valid = await User.exists({ _id: req.params.id });
    if (valid) {
      await User.findByIdAndDelete(req.params.id);
      res.json('User Deleted');
    } else {
      res.status(400).json({ errors: `User not exists` });
    }
  } catch (error) {
    res.status(400).json({ errors: `${error}` });
  }
});

app.put('/users/edit/:id', async (req, res) => {
  try {
    const valid = await User.exists({ _id: req.params.id });
    if (valid) {
      const { name, age, username } = req.body;
      const newData = { name, age, username };
      await User.findByIdAndUpdate(req.params.id, newData);
      res.json('User Updated');
    } else {
      res.status(400).json({ errors: `User not exists` });
    }
  } catch (error) {
    res.status(400).json({ errors: `${error}` });
  }
});

// SHOW route
// app.get('/users/:id', async (req, res) => {
//   try {
//     const valid = await User.exists({ _id: req.params.id });
//     if (valid) {
//       const user = await User.findById(req.params.id);
//       res.json(user);
//     } else {
//       res.status(400).json({ errors: `User not exists` });
//     }
//   } catch (error) {
//     res.status(400).json({ errors: `${error}` });
//   }
// });

// End ----------------------------------

app.listen(5000, () => {
  console.log('Server started with success');
});
