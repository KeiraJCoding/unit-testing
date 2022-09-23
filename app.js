const add = (num1, num2) => {
    return num1 + num2
}

const addWord = (word, arr) => {
    arr.push(word);
    return arr;
}

const myArray = (arr) => {
    arr.includes('demi');
    return arr
}

module.exports = {
    add, addWord, myArray
}

