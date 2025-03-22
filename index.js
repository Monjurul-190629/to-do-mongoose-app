const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Mongoose Model
const NewCollection = require('./models/newModel');

// Import Routes
const todoHandler = require('./routeHandler/todoHandler');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB (Ensure .env has MONGO_URI)
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected successfully!"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Application Routes
app.use('/todo', todoHandler);

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("🚀 Server is running...");
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
