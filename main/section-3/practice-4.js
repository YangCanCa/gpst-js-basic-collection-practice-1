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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    for (let item of collection) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
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

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
*/
function countSameElements(collection) {
    var result = [];
    let ele='';
    let num=0;
    collection.forEach((item) => {
        if(item.includes('-')){
            ele = item.split('-')[0];
            num = parseInt(item.split('-')[1]);}
        else {
            ele =item;
            num=1;}
        findAndpush(result,ele,num);
    })
    return result;
    function findAndpush(result,item,num){
        if(result.some((ele) => ele.key === item)){
            result.find((ele) => ele.key === item).count+=num
        }else{
            result.push({key:item,count:num});
        }
    
    return result;
}
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

