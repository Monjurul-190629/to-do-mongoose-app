const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Import Mongoose Model
const NewCollection = require('./models/newModel');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB (Make sure your .env has MONGO_URI)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(" MongoDB connected successfully!"))
.catch(err => console.error(" MongoDB connection error:", err));

// ✅ GET Route to Fetch Data
app.get("/gets", async (req, res) => {
    try {
        const data = await NewCollection.find({}); // Fetch all documents
        console.log("Fetched Data:", data);
        res.json(data); // Send data as response
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: error.message });
    }
});

// ✅ Default Route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
