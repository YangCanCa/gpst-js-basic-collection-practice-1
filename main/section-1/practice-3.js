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
        if (includes(objectB.value, item)) {
            result.push(item);
        }
    }
    return result;
}*/
module.exports = function collectSameElements(collectionA, objectB) {
      let result = [];
      collectionA.forEach((item) => {
          if(objectB.value.includes(item)){
              result.push(item);
          }
      })
      return result;
}    
