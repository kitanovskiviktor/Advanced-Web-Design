function arrayPartition(array){
    
    let tempArray = [];
    
    for(let i = 1; i<array.length; i++){
        let left = array.slice(0, i);
        let right = array.slice(i);
        tempArray.push([left, right]);
    }
    
    return tempArray;
    
}