const db = require('../config/db');

// GET semua buku
const getAllBooks = async () => {
    const [row] = await db.query("SELECT * FROM buku");
    return row;
};

// GET buku by kode
const getBookByCode = async (code) => {
    const [row] = await db.query("SELECT * FROM buku WHERE kode_buku = ?", [code]);
    return row[0];
};

// ADD buku
const addBook = async (book) => {
    const { kode, judul, pengarang, penerbit } = book;
    const query = `
        INSERT INTO buku (kode_buku, judul, pengarang, penerbit)
        VALUES (?, ?, ?, ?)
    `;
    const [affected] = await db.query(query, [kode, judul, pengarang, penerbit]);
    return affected.affectedRows;
};

// UPDATE buku
const updateBook = async (kode, newData) => {
    const { judul, pengarang, penerbit } = newData;

    const query = `
        UPDATE buku 
        SET judul = ?, pengarang = ?, penerbit = ?
        WHERE kode_buku = ?
    `;

    const [affected] = await db.query(query, [judul, pengarang, penerbit, kode]);
    return affected.affectedRows;
};

// DELETE buku
const delBook = async (id) => {
    const [aff] = await db.query("DELETE FROM buku WHERE kode_buku = ?", [id]);
    return aff.affectedRows;
};

module.exports = {
    getAllBooks,
    getBookByCode,
    addBook,
    updateBook,
    delBook
};
