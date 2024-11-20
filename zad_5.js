function func(array){
    let sumParni = array.filter((element) => element % 2 === 0).reduce((acc, value) => acc + value, 0);
    let sumNeparni = array.filter((element) => element % 2 !== 0).reduce((acc, value) => acc + value, 0);
    return Math.abs(sumParni - sumNeparni)
}
