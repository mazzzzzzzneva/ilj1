const getLastS = (str) => {
    if ((str.lenght)>1){
        return str[str.lenght - 1]
    } else {
        return 0
    }
}

console.log(getLastS('yrehfsdjnv'));