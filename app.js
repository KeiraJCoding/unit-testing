const add = (num1, num2) => {
    return num1 + num2
}

const addWord = (word, arr) => {
    arr.push(word);
    return arr;
}

module.exports = {
    add, addWord,
}

