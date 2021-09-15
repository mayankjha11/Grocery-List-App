const express = require('express');
const router = express.Router();

const Items = require('../models/items');

router.get('/', async (req, res) => {
  try {
    const items = await Items.find({});
    res.send({ items })
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const item = await Items.findById(req.params.id);
    res.send({ item });
  } catch (err) {
    res.status(404).send({ message: 'Item not found!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newItem = await Items.create({ name: req.body.name, quantity: req.body.quantity });
     res.send({ newItem });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body);
     res.send({ message: 'The item was updated' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const removeItem = await Items.findByIdAndRemove(req.params.id);
     res.send({ message: 'The item was removed' });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
