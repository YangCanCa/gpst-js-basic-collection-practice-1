'use strict';

module.exports = function countSameElements(collection) {
    var result = [];
    let ele='';
    let num=0;
    collection.forEach((item) => {
        if(item.includes('-')){
            ele = item.split('-')[0];
            num = parseInt(item.split('-')[1]);}
        else if(item.includes(':')){
            ele = item.slice(':')[0];
            num = parseInt(item.split(':')[1]);
    }
    
        else if(item.includes('[')){
            ele  = item.split('[')[0];
            num  = parseInt(item.split('[')[1].substring(0,item.split('[')[1].length - 1));
    }
        else {
            ele =item;
            num=1;}
        findAndpush(result,ele,num);
    })
    return result;

    

function findAndpush(result,item,num){
        if(result.some((ele) => ele.name === item)){
            result.find((ele) => ele.name === item).summary+=num
        }else{
            result.push({name:item,summary:num});
        }
    
    return result;
}
}
