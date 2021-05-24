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