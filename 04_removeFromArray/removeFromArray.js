const removeFromArray = function(arr, ...toRemove) {
    for (const numToRemove of toRemove) {
        let removeIndex;
        do {
            removeIndex = arr.indexOf(numToRemove);
            console.log(arr);
            if (removeIndex !== -1) {
                arr.splice(removeIndex, 1);
            }
        } while (removeIndex !== -1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
