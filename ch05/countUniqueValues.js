function countUniqueValues(array){
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 0) return 0;

    const countSet = new Set();
    for (let i = 0; i < array.length; i++) {
        countSet.add(array[i]);
    }
    return countSet.size;
  }

  countUniqueValues([1,1,1,1,1,2])