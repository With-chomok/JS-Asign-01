
// problem solve.1:Create a variable called carName, assign the value Volvo to it.

let carName = "Volvo" ; 

console.log(carName);


// problem solve 2:On one single line, declare three variables with the following names and values:

let firstName = "john";
let lastName = "Doe";
let age = "35";

// problem solve 3:Use the correct assignment operator that will result in x being 50 (same as x = x * y).

x = 10 ;
y = 5 ;

x = x * y;
console.log(x);


// problem solve 4:Use comments to describe the correct data type of the following variables:o

let length = 16 ; data type : number
let lastName = "Johnson";
                            //  (data type : number)
const x = {
    firstName: "john",
    lastName: "doe"
};
//  (data type : object)


console.log(typeof x)

problem solve 5:Execute the function named myFunction. or see html file

function myFunction(){
    alert("Hello World!")
}
myFunction();

// problem 6 & 7 :- html file 

// problem solve 8: Array Related Question(html file check please)


    // solve 1: Alert the number of items in an array, using the correct Array property: 


    const car =  ["volvo" , "jeep" , "Mercedes"];
    console.log(car)

    // solve 2: 2. Change the first item of Brand to "Ford".
    const Brand = ["Volvo", "Jeep", "Mercedes"]; 
    Brand[0] = "Ford"
    console.log(Brand)


// problem solve 9: Math Related Problems

        //solve 1:  Use the correct Math method to create a random number.

const randomNumber = Math.random(); 
    console.log(randomNumber);



// solve 2 :Use the correct Math method to return the largest number of 10 and 20.
const bigNumber = Math.max(10, 20);
console.log(bigNumber)


// solve 3:  Use the correct Math method to get the square root of 9.
const squarRoot = Math.sqrt(9);
console.log(squarRoot);




// problem solve 10: comparison operator related problems! 

// solve 1: Choose the correct comparison operator to alert true, when x is greater than y.
// (check html file )
const x = 10;
const y = 5;

alert(x > y)




// solve 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
let age = 18;

let message = age < 18 ? "Too young" : "Old enough";
console.log(message)
