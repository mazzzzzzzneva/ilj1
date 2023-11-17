function getSymbol(word, num) {
    if (`${num}` <= (word.length)) {
        return word[num];
    } else {
        return ''
    }
}


export default getSymbol;