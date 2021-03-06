'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

module.exports = function countSameElements(collection) {
    let result = [];
    for (let item of collection) {
        let obj = find(result, item)
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    }
    return result;
}
*/
module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach((item) =>{
        if (result.some((ele) => ele.key === item)) {
            result.find((ele) => ele.key === item).count++;
        } else {
            result.push({ key: item, count: 1 });
        }
    })
    return result;
}    
