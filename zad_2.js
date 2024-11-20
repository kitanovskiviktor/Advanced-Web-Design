function add_to(f){
    let values = [];
    
    return {
        insert: function(value){
            if(values.length < 2){
                values.push(value);
            }
            
            if(values.length === 2){
                let result = f(values[0], values[1])
                values = [];
                values.push(result);
            }
        },
        
        result: function(){
            if(values.length === 2){
                return f(values[0], values[1]);
            }
           return values[0];
        }
        
    }
}