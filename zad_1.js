function dropUntil(array, predicate){
    let index = 0;
    
    while(index < array.length && !predicate(array[index])){
        index++;
    }
    return array.slice(index);
}