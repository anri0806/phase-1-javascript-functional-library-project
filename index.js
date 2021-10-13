function helper(collection) {
  return collection instanceof Array ? collection : Object.values(collection);
  //Object.values() turn collection object into array
  //therefore, helper() returns array either way
}

function myEach(collection, callback) {
  const newCollection = helper(collection);

  for (let element of newCollection) {
    callback(element);
  }

  return collection;
}

function myMap(collection, callback) {
  const newCollection = helper(collection);

  const newArray = [];
  for (let element of newCollection) {
    newArray.push(callback(element));
  }

  return newArray;
}

//[1, 2, 3, 4]
//(acc + (val * 3))
function myReduce(collection, callback, acc) {
  let newCollection = helper(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }

  for (let num of newCollection) {
    acc = callback(acc, num, newCollection);
  }

  return acc;
}

function myFind(collection, predicate) {
  const newCollection = helper(collection);

  for (let num of newCollection) {
    if (predicate(num)) {
      return num;
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const newCollection = helper(collection);

  let array = [];
  for (let num of newCollection) {
    if (predicate(num)) {
      array.push(num);
    }
  }
  return array;
}

function mySize(collection) {
  const newCollection = helper(collection);

  return newCollection.length;
}

function myFirst(array, n) {
  if (n) {
    return array.slice(0, n);
  } else {
    return array[0];
  }
}

function myLast(array, n) {
  if (n) {
    return array.slice(-n);
  } else {
    return array[array.length - 1];
  }
}

function myKeys(object) {
    let keys = []
    for(let key in object){
        keys.push(key)
    }
    return keys
}

function myValues(object) {
    let values = []
    for(let key in object) {
        values.push(object[key])
    }

    return values
}


function mySortBy(array, callback) {
    let newArray = [...array]
    newArray.sort(function(a, b){
        if(callback(a) > callback(b)){
            return 1
        } else if (callback(a) < callback(b)){
            return -1
        } else {
            return 0
        }
    })

    return newArray
}
