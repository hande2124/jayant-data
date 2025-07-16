const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
const dataStore = {};

// POST /items – Add item with id
app.post('/items', (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: 'data is required' });
  }

  dataStore = data;
  res.status(201).json({ message: 'Item added', data: data });
});

// GET /items – Get all items
app.get('/items', (req, res) => {
  const allItems = Object.entries(dataStore).map(([id, value]) => ({ id, value }));
  res.json(allItems);
});

// GET /items/:id – Get item by ID
app.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const value = dataStore[id];

  if (!value) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json({ id, value });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
