const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory data store
let dataStore = [
  {
    id: 1,
    name: "Benefit Plan Blue Standard",
    cost: 100,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 2,
        unit: "USD",
      },
      {
        description: "Coverage against 40 illnesses",
        price: 3,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 10,
        unit: "USD",
      },
    ],
  },
  {
    id: 2,
    name: "Benefit Plan Blue Pro",
    cost: 120,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, and EPS",
        price: 2,
        unit: "USD",
      },
      {
        description: "Coverage against 43 illnesses",
        price: 2,
        unit: "USD",
      },
    ],
  },
  {
    id: 3,
    name: "Benefit Plan Blue Enterprise",
    cost: 140,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 2,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 10,
        unit: "USD",
      },
    ],
  },
  {
    id: 4,
    name: "Benefit Plan Blue Test",
    cost: 140,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 2,
        unit: "USD",
      },
      {
        description: "Coverage against 65 illnesses",
        price: 3,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 10,
        unit: "USD",
      },
    ],
  },
  {
    id: 5,
    name: "Benefit Plan Blue Family",
    cost: 300,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 20,
        unit: "USD",
      },
      {
        description: "Coverage against 32 illnesses",
        price: 30,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 100,
        unit: "USD",
      },
    ],
  },
  {
    id: 6,
    name: "Benefit Plan Blue Family 2",
    cost: 170,
    currency: "USD",
    additionalDetails: [
      {
        description: "Coverage against 32 illnesses",
        price: 3,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 10,
        unit: "USD",
      },
    ],
  },
  {
    id: 7,
    name: "Benefit Plan Blue Family 3",
    cost: 200,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 22,
        unit: "USD",
      },
      {
        description: "Coverage against 90 illnesses",
        price: 30,
        unit: "USD",
      },
    ],
  },
  {
    id: 8,
    name: "Benefit Plan Blue Family 4",
    cost: 110,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 2,
        unit: "USD",
      },
      {
        description: "Coverage against 32 illnesses",
        price: 3,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 10,
        unit: "USD",
      },
    ],
  },
  {
    id: 9,
    name: "Benefit Plan Blue Family 5",
    cost: 155,
    currency: "USD",
    additionalDetails: [
      {
        description: "Available for EMP, EPS, and Family",
        price: 12,
        unit: "USD",
      },
      {
        description: "Coverage against 32 illnesses",
        price: 12,
        unit: "USD",
      },
      {
        description: "Income tax benefits Section",
        price: 15,
        unit: "USD",
      },
    ],
  },
];

// POST /items – Add item with id
app.post("/items", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: "data is required" });
  }

  dataStore = data;
  res.status(201).json({ message: "Item added", data: data });
});

// GET /items – Get all items
app.get("/items", (req, res) => {
  res.json(dataStore);
});

// GET /items/:id – Get item by ID
app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const value = dataStore.find((item) => item.id === parseInt(id));

  if (!value) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json({ id, value });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
