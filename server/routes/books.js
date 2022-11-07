const express = require("express");
const router = express.Router();
const {books} = require("../controllers/books");

router.get("/books", books)

module.exports = router;