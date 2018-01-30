var person = {
  firstname: 'Vishwa',
  lastname: 'chauhan',
  fullname: function(){
    return this.firstname+ ' ' + this.lastname;
  }
}

function logName(lang){
  console.log('Logged: '+ this.fullname());
  console.log('Arguments: '+ lang);
  console.log('------------------');
}
// bind makes copy of function with the this keyword pointing to person object.
var logMyName = logName.bind(person);

logMyName();

logName.call(person,'en');
logName.apply(person,['es']);

var person2 = {
  firstname: 'Marla',
  lastname: 'Singer'
};
// function borrowing
console.log(person.fullname.apply(person2));

// using iife
(function(lang){
	console.log(this.fullname());
	console.log(lang);

}).apply(person,['English']);

// function currying : Creating a copy of a function but with some preset parameters

function multiply(a,b){
  return a*b;
}

var multiplyByTwo = multiply.bind(this,2);

console.log(multiplyByTwo(7)); // Output : 14
