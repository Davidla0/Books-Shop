'use strict'
const STORAGE_KEY = 'bookDB'

var gBooks
var bookTitle = ['harry Potter', 'All-In', 'Love Story']


function _createBook(id, title) {
    return {
        id,
        title,
        price: getRandomInt(1, 10)
    }
}

function _createBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 3; i++) {
            var book = _createBook(i, bookTitle[i])
            books.push(book)
        }
    }
    gBooks = books
    _saveCarsToStorage()
}

function getBooks() {
    return gBooks
}

function _saveCarsToStorage() {
    saveToStorage(STORAGE_KEY, gBooks)
}
