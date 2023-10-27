
// Write a for loop that will log the numbers 1 through 20.

// for(let i =1; i<=20; i++){
//   console.log(i)
// }

// Write a for loop that will log only the even numbers in 0 through 200

// for(let i = 0; i <= 200; i=i+2){
//   console.log(i)
// }


// Fizz Buzz

// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// for(let i = 1; i <= 100; i++){
//   if(i%3==0){console.log("Fizz")
//     if(i%5==0){console.log("FizzBuzz")}
//   }
//   else if(i%5==0){console.log("Buzz")}
//   else {console.log(i)}
// }

// Wild Wild Life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down", "NOT A HOME TOWN"]

plantee[2]++
// console.log(plantee)
wolfy[3] = "Gotham City"
dart[3] = [dart[3], "Hawkins"]
// console.log(dart)

wolfy.shift()
// console.log(wolfy)
const gameboy = wolfy
gameboy.unshift("Gameboy")
console.log(gameboy)
