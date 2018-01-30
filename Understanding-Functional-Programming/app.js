var arr1 = [1,2,3];

function mapForEach(arr, fn){
	var newArr = [];
	for(var i = 0; i< arr.length; i++){
		newArr.push(fn(arr[i]));
	}
	return newArr;
}

var arr2 = mapForEach(arr1, function(item){
	return item*2;
});

console.log(arr2); // Output: [2,4,6]

var arr3 = mapForEach(arr1, function(item){
	return item > 2;
});

console.log(arr3); // Output: [false,false, true]

var checkPastLimit = function(limiter, item){
	return item > limiter;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));

console.log(arr4); // Output: [false, true, true]

var checkPastLimitSimplified = function(limiter){
  return function(limiter, item){
    return item > limiter;
  }.bind(this,limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));

console.log(arr5); // Output: [false, false , true]
