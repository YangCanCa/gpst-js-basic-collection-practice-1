'use strict';

/*function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    for (let item of collectionA) {
        if (includes(objectB.value, item.key)) {
            result.push(item.key);
        }
    }
    return result;
}
*/
module.exports = function collectSameElements(collectionA, objectB) {
    const arr = [];
    collectionA.forEach((item) => {
        arr.push(item.key);
    })
    let result = [];
    arr.forEach((ele) => {
        if(objectB.value.includes(ele)){
            result.push(ele);
        }
    })
    return result;   
}    
