const express = require('express');
const userControl = require('../controllers/userController');

const router = express.Router();

// GET semua buku
router.get('/', userControl.getAllBooks);

// GET satu buku berdasarkan kode
router.get('/:code', userControl.getBookByCode);

// ADD buku baru
router.post('/', userControl.addBook);

// UPDATE buku
router.put('/:code', userControl.updateBook);

// DELETE buku
router.delete('/:code', userControl.delBook);

module.exports = router;
