function makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


function getDate() {
    var currDate = new Date().toUTCString()
    const lastIndexOfSpace = currDate.lastIndexOf(' ')
    return currDate.substring(0, lastIndexOfSpace)
}


function sortByNumbers(arrs) {
    arrs.sort((a, b) => {
        return a.importance - b.importance;
    });
    return arrs
}

function sortByLetter(arrs) {
    arrs.sort((a, b) => {
        let firstName = a.username[0].toLowerCase(),
            secondName = b.username[0].toLowerCase();

        if (firstName < secondName) {
            return -1;
        }
        if (firstName > secondName) {
            return 1;
        }
        return 0;
    });
    return arrs
}

function sortByDate(arrs) {
    arrs.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })
    return arrs
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}