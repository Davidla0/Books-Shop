'use strict'

function onInit() {
    var books = _createBooks()
    renderBooks()
}

function renderBooks() {
    const books = getBooks()
    var strHtmls = books.map(book =>
        `<tr>
    <td>${book.id} </td>
    <td>${book.title} </td>
    <td> &#36 ${book.price}</td>
    <td>
        <button class="read">Read</button>
        <button class="update">Update</button>
        <button class="delete">Delete</button>
    </td>
</tr>`)
    const elBook = document.querySelector('.book-detail')
    elBook.innerHTML = strHtmls.join('')
}