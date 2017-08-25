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

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}
*/
module.exports = function countSameElements(collection) {
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