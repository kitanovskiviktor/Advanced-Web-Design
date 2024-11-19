

p1 = {"a":1,"b":2}
p2 = {"a":10,"c":2}
function extender(obj1, obj2) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key) && !(key in obj1)) {
            obj1[key] = obj2[key];
        }
    }
    return obj1;
}


console.log(extender(p1, p2))

