function compareArrays(arr1, arr2) {
    let result;

    result = arr1.every((el, index) => el === arr2[index] && arr1.length === arr2.length);

    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr;

    resultArr = arr.filter(el => el > 0 && !(el % 3)).map(el => el * 10);

    return resultArr; // array
}