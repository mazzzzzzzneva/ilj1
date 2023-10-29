function getMin(a, b, c){
    if (a>b>c){
        return c;
    } else if (b<a<c){
        return b;
    } else if (a<b<c){
        return a
    }
}

console.log(getMin(10,5,79));