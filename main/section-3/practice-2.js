'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = JSON.parse(JSON.stringify(collectionA));
    let valueB = objectB.value;

    result.forEach((item) => {
        if(valueB.includes(item.key)){
            item.count-=parseInt(item.count/3);
        }
    })
    return result;
}
