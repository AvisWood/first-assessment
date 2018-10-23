/*  Question 1: Create a variable of each of the following data types 
               String, Int, Bool, Float */
let name = "avis";
let age = 27;
let pi = 3.14;
let aBool = true;
// Question 2: Create a variable called trueOFalse. Create an if 
//             statment so that if the variable is true the number 1 is
//             returned. Otherwise the number 2 is returned.  
const trueOrFalse = true;
if(trueOrFalse === true){
    console.log("1");
} else {
    console.log("2");
}
    
// Question 3: Create a for loop that counts every EVEN number from
 //             1-100 starting at 0
 for(i=0;i<=100;i+=2){
    console.log(i);
}
// Question 4: Create a variable that is a bool and is equal to true
//             Create a while loop that will print "hello"
//             to the console 20 times and then change that variable
//             to false ending the loop.
let isFalse = true;
let counter = 0;
while(isFalse){
    console.log("hello");
    if (counter === 20) {
    isFalse=false;
} counter++
}
// Question 5: Create a function that can determine if a parameter
//             is true or false. If it is true return the string "true".
//             Otherwise, return the string "false"
//
const isTrue = true;
function maybeTrue(string){
if(isTrue === true){
    return "True";
} else {
    return "False";
}
}
console.log(maybeTrue(isTrue))            
      
// Bonus Question: What does D.R.Y stand for?
//DON't REPEAT YOURSELF