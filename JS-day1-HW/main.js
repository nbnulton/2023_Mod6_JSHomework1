//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for (let i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            console.log("Matched dog_name")
        } else {
            console.log("No Matches")
        }
    }
    console.log(dog_string.includes("Max"))
}

//Call method here with parameters
console.log(findWords())

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0 ){
            spliced_name = arr.splice
            console.log("even index")
        } else {
            console.log(arr[i])
        }
    }
}

console.log(replaceEvens())

// arr.splice(0, 1, "even index")
// console.log(arr)

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]







// CODEWARS

// 1) Create a function that takes an integer as an argument and returns
//  "Even" for even numbers or "Odd" for odd numbers.

// PYTHON
// def even_or_odd(number):
//     if number % 2 == 0:
//         return "Even"
//     else:
//         return "Odd"

function evenOrOdd(num){
    if (num % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

console.log(evenOrOdd(3))



// 2) Alex just got a new hula hoop, he loves it but feels discouraged because 
// his little brother is better than him
// Write a program where Alex can input (n) how many times the hoop goes round and 
// it will return him an encouraging message :)
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// PYTHON
// def hoop_count(n):
//     if n >= 10:
//         return "Great, now move on to tricks"
//     else:
//         return "Keep at it until you get it"

function hoopCount(n){
    if (n >= 10){
        console.log("Great, now move on to tricks")
    } else {
        console.log("Keep at it until you get it")
    }
}

console.log(hoopCount(9))


// 3) Complete the function so that it finds the average of the three scores passed to 
// it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for 
// negative values or values greater than 100.

// PYTHON
// def get_grade(s1, s2, s3):
//     avg = (s1 + s2 + s3) / 3
//     if avg >= 90 and avg <= 100:
//         return "A"
//     elif avg >= 80 and avg < 90:
//         return "B"
//     elif avg >= 70 and avg < 80:
//         return "C"
//     elif avg >= 60 and avg < 70:
//         return "D"
//     else:
//         return "F"

function getGrade(s1, s2, s3){
    avg = (s1 + s2 + s3) / 3
    if (avg >= 90 && avg <= 100){
        console.log("A")
    } else if (avg >= 80 && avg < 90){
        console.log("B")
    } else if (avg >= 70 && avg < 80){
        console.log("C")
    } else if (avg >= 60 && avg < 70){
        console.log("D")
    } else {
        console.log("F")
    }


}

console.log(getGrade(62, 83, 94))

// 4) In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

// PYTHON
// def is_even(n): 
//     if n % 2 == 0:
//         return True
//     else:
//         return False

function isEven(num){
    if (num % 2 == 0){
        console.log("True")
    } else {
        console.log("False")
    }
}

console.log(isEven(3))
















