const userModel = require('../models/userModel');

// GET ALL BOOKS
const getAllBooks = async (req, res) => {
    try {
        const books = await userModel.getAllBooks();
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: "Error Get All Books",
            status: 500
        });
    }
};

// GET BOOK BY CODE
const getBookByCode = async (req, res) => {
    try {
        const book = await userModel.getBookByCode(req.params.code);

        if (!book) {
            return res.status(404).json({
                message: "Data Not Found"
            });
        }

        res.json(book);

    } catch (error) {
        res.status(500).json({
            message: "Error Get Book By Code",
            error
        });
    }
};

// ADD BOOK
const addBook = async (req, res) => {
    const { kode, judul, pengarang, penerbit } = req.body;

    // Validasi sederhana
    let msg = "";
    if (!kode) msg += "Kode Buku wajib diisi\n";
    if (!judul) msg += "Judul Buku wajib diisi\n";

    if (msg !== "") {
        return res.status(400).json({ message: msg });
    }

    try {
        const affected = await userModel.addBook(req.body);

        if (affected === 1) {
            return res.status(200).json({
                msg: "Insert Successfully",
                data: { ...req.body }
            });
        } else {
            return res.status(400).json({
                msg: "Insert Failed"
            });
        }

    } catch (error) {
        res.status(500).json({
            message: "Error Insert Book",
            error
        });
    }
};

// UPDATE BOOK
const updateBook = async (req, res) => {
    const kode = req.params.code;
    const data = req.body;

    try {
        const affected = await userModel.updateBook(kode, data);

        if (affected === 1) {
            return res.status(200).json({
                msg: "Update Successfully",
                data: data
            });
        }

        res.status(404).json({ msg: "Book Not Found" });

    } catch (error) {
        res.status(500).json({
            message: "Error Update Book",
            error
        });
    }
};

// DELETE BOOK
const delBook = async (req, res) => {
    try {
        const result = await userModel.delBook(req.params.code);

        if (result === 1) {
            res.status(200).json({ msg: "Deleted Successfully" });
        } else {
            res.status(404).json({ msg: "Book Not Found" });
        }

    } catch (error) {
        res.status(500).json({
            message: "Error Delete Book",
            error
        });
    }
};

module.exports = {
    getAllBooks,
    getBookByCode,
    addBook,
    updateBook,
    delBook
};
