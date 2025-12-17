const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// GET semua buku
router.get("/", userController.getAllBooks);

// GET buku berdasarkan kode
router.get("/:code", userController.getBookByCode);

// ADD buku
router.post("/", userController.addBook);

// UPDATE buku
router.put("/:code", userController.updateBook);

// DELETE buku
router.delete("/:code", userController.delBook);

module.exports = router;
