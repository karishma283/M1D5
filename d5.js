/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1,l2) {
    return l1 * l2;
}
let rectangle=area(100,90)
console.log("The total associated rectangle area is", rectangle)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(a,b){
    if(a===b){
        let sum = (a + b) * 3
        console.log("If both values are same,the result is (Sum multiplied by3):", sum)
    }else{
        let sum=a+b
        console.log(sum)
    }
}
console.log(crazySum(8,9))



/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
function crazyDiff(a){
    if(a > 19){
        let diff= a - 19
        let triple = diff * 3
        console.log(triple)
    }else{
        let diff= a - 19
        console.log(diff)
    }
}
crazyDiff(15)

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary(n){
    if(n>=20 && n<=100 || n==400){
        return true
    }else
    {
        return false
    }
 }
 console.log(boundary(18))

 
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(k){
    let words = k.split(" ");
    for(let i=0; i<words.length;i++){
        if(words[i]=="Strive"){
            return k
        }else
        {
            return "Strive " + k
        }
    }
}
let test = strivify("Strivehey")
console.log(test)


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(a){
    if(a % 3 ==0 || a % 7==0){
        return "The given number is multipe of 3 or 7"
    }else{
        return "The given number is not multipe of 3 or 7"
    }
}
console.log(check3and7(8))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(string){
    let stringSplit = string.split("")
    let reversStringInSplit = stringSplit.reverse()
    let joinString= reversStringInSplit.join("")
    return joinString
}
console.log(reverseString("Strive"))



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string){
    let separateWord = string.toLowerCase().split(' ');
    for (let i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
}
console.log(upperFirst("this is a test for exerise"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/