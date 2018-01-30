function greet(input){
  return function(name){
    console.log(input+' '+name);
  }
}

var sayHi = greet('Hi!!');
sayHi('vishwa'); // Output: Hi!! vishwa

// little more complex example :)

function buildFunction(){
  var arr = [];

  for(var i = 0; i < 3; i++){

    arr.push(function(){
      console.log(i);
    });
  }
  return arr;
}

var run = buildFunction();
run[0](); // 3
run[1](); // 3
run[2](); // 3

// little change :P

function buildFunction1(){
  var arr = [];

  for(let i = 0; i < 3; i++){  // ES2016 feature let assign each i at different
                              //memory location

    arr.push(function(){
      console.log(i);
    });
  }
  return arr;
}

var run = buildFunction1();
run[0](); // 0
run[1](); // 1
run[2](); // 2

// little more change :P

function buildFunction2(){
  var arr = [];

  for(var i = 0; i < 3; i++){

    arr.push(
      (function(item){  //ES2015 feature IIFE
      console.log(item)
    })(i));
  }
  return arr;
}

var run1 = buildFunction2();
run1[0]; // 0
run1[1]; // 1
run1[2]; // 2


//Callbacks
//A function you give to another function to be run when the other function is finished
function tellMeWhenDone(callback){
	var a = 1000;
	for(var i=0; i < 5000000; i++){}
	callback();
}

tellMeWhenDone(function(){
	console.log('Vishwa I');
});  // Vishwa I

tellMeWhenDone(function(){
	console.log('Vishwa II');
}); //Vishwa II
