const express = require('express');
const router = express.Router();
const Todo = require('../models/todoScheme'); // Import Model

// ✅ CREATE a new Todo (POST)
router.post('/', async (req, res) => {
    try {
        const { title, author, status, date } = req.body;

        const newTodo = new Todo({
            title,
            author,
            status,
            date: date ? new Date(date) : undefined
        });

        await newTodo.save();
        res.status(201).json({ message: "✅ Todo created successfully", todo: newTodo });
    } catch (error) {
        res.status(500).json({ error: "❌ Failed to create Todo", details: error.message });
    }
});

// ✅ GET all Todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: "❌ Failed to fetch todos", details: error.message });
    }
});

module.exports = router;
