/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module("UI Unit Tests");
test("Reverse String", 2, function() {
	equal( typeof reverseString, 'function', 'Must contain reverse function');
	strictEqual( reverseString('Subscribers rock'), 'kcor srebircsbuS', 'Successful output. Expected kcor srebircsbuS, Result ' + reverseString('Subscribers rock'));
});

var values = [3, 5, 7, 20, 0.18, 01, -1.1, 12, Infinity, Infinity, 0.18, -1.1, 12];

test("Find Minimum Value", 1, function() {
	equal( findMinValue(values), -1.1, 'Successful output. Expected: -1.1. Result: ' + findMinValue(values));
});

test("Find Distinct Values", 1, function() {
	ok( findDistinctValues(values), 'Successful output. Expected: 3,5,7,20,0.18,1,-1.1,12,Infinity. Result: ' + findDistinctValues(values));
});

//test FizzBuzz
test("Fizz Buzz", 1, function() {
	equal(typeof doFizzBuzz, 'function', 'Must contain fizzbuzz function');
});

var fruits = ['apple', 'banana', 'orange', 'kiwi', 'pear', 'plum', 'strawberry'];
var fruitsToRemove = ['pear', 'banana'];
//removeFruits
test("Fruit Array Removal", 1, function() {
	ok( removeFruits(fruits, fruitsToRemove), 'Successful. Expected: apple,orange,kiwi,plum,strawberry. Result: ' + removeFruits(fruits, fruitsToRemove));
});

//pushOntoArray
test("Push Values Onto Array", 1, function(){
	ok(pushOntoArray([1, 2, 3, 4, 5], 6), 'Successful. Expected: 1,2,3,4,5,6 Result:' + pushOntoArray([1, 2, 3, 4, 5], 6));
});

//splitListStrUsingComma

//sum
test("Sum", 4, function(){
	strictEqual(sum(1, 1, 2, 3, 5, 7), 19, 'Successful. Expected: 19 Result: ' + sum(1, 1, 2, 3, 5, 7));
	//for extra testing
	strictEqual(sum(1, 1), 2, 'Successful. Expected: 2 Result: ' + sum(1, 1));
	strictEqual(sum(1, 1, 2, 3, 7), 14, 'Successful. Expected: 14 Result: ' + sum(1, 1, 2, 3, 7));
	strictEqual(sum(2, 3, 5, 7), 17, 'Successful. Expected: 17 Result: ' + sum(2, 3, 5, 7));
});

//isOnlyWhitespace
test("Whitespace", function () {
	equal(isOnlyWhitespace(" "), true, 'Successful. Expected: true. Result:' + isOnlyWhitespace(" "))
});

//closure test
var newClosure = new closure();
newClosure.y();

test("Closure", 2, function() {
	ok(newClosure.getX() == 1, 'Success' );
	ok(newClosure.x === undefined, 'private variable');
});

//DataTable Test 
var newData = new DataTable();
newData.addColumns(1);
newData.addRows("A");

test("Columns & Rows", 2, function(){
	ok(newData.rows === undefined, 'Private variable');
	ok(newData.columns === undefined, 'Private variable');
});


