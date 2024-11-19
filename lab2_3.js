


function sort_num_by_calls(functions){

    function counter(f){
        let counter = 0;
        while(typeof f === "function"){
            f = f();
            counter++;
        }
        return counter;
    }

    return functions.sort((a,b) => counter(a) - counter(b));
}