

'use strict';

/*function find(collection, ch) {
    for (let item of collection) {
        if (item.key === ch) {
            return item;
        }
    }

    return null;
}

function summarize(collection) {
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

function includes(collection, ch) {
    for (let item of collection) {
        if (item === ch) {
            return true;
        }
    }

    return false;
}

function discount(collection, promotionItems) {
    let result = [];
    for (let item of collection) {
        let key = item.key;
        let count = item.count;
        if (includes(promotionItems, key)) {
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    }
    return result;
}
*/
function countSameElements(collection) {
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

function discount (collectionA, objectB) {
    let result = JSON.parse(JSON.stringify(collectionA));
    let valueB = objectB.value;

    result.forEach((item) => {
        if(valueB.includes(item.key)){
            item.count-=parseInt(item.count/3);
        }
    })
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let collectionC= countSameElements(collectionA);
    return discount(collectionC, objectB);
}

    
