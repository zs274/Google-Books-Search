const db = require("../models");

module.exports = {
    findAll: async (req, res) => {
        try {
            const books = await db.Book.find(req.query);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },

    findById: async (req, res) => {
        try {
            const books = await db.Book.findById(req.params.id);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },

    create: async (req, res) => {
        try {
            const books = await db.Book.create(req.body);
            console.log(req.body);
            return res.json(books);
        } catch (err) {
            console.log(err);
            return res.status(422).json(err);
        }
    },

    update: async (req, res) => {
        try {
            const books = await db.Book.findOneAndUpdate({ id: req.params.id }, req.body);
            return res.json(books);
        } catch (err) {
            return res.status(422).json(err);
        }
    },

    remove: async (req, res) => {
        try {
            const books = await db.Book.findById(req.params.id);
            const deleteBook = await books.remove();
            return res.json(deleteBook);
        } catch (err) {
            return res.status(422).json(err);
        }
    }
};