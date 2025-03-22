const mongoose = require('mongoose');

// Define Schema
const newSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

// ✅ Force MongoDB to use "New_collection" as the collection name
const NewCollection = mongoose.model("new_collections", newSchema, "new_collections");

module.exports = NewCollection;
