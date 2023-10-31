const getLastS = (str) => {
    if (str.length > 1) {
        let b = str.length
        return str[b - 2]
    }
    return 0
}

console.log(getLastS("12345"));