
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
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down", "NOT A HOME TOWN"]

// plantee[2]++
// // console.log(plantee)
// wolfy[3] = "Gotham City"
// dart[3] = [dart[3], "Hawkins"]
// // console.log(dart)

// wolfy.shift()
// // console.log(wolfy)
// const gameboy = wolfy
// gameboy.unshift("Gameboy")
// console.log(gameboy)


// const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for(let i of turtles){
//   console.log(i.toUpperCase())
// }

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// for(i in favMovies){
//   if(favMovies[i] == 'Titanic'){
//     // console.log(`The index of the Titanic is ${i}`)
//   }
// }

// // console.log(favMovies)

// favMovies.sort()   // sorted alphabetical
// // console.log(favMovies)  // permanently altered

// favMovies.pop()
// // console.log(favMovies)

// favMovies.push("Guardians of the Galaxy")
// // console.log(favMovies)

// favMovies.reverse()

// favMovies.shift()
// // console.log(favMovies)

// // favMovies.unshift()
// // console.log(favMovies.length)
// // console.log(favMovies.unshift())

// // console.log(favMovies)
// // console.log(favMovies.indexOf('Django Unchained'))

// favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')

// console.log(favMovies)

// function midpoint(num){
//   return Math.round(num/2)
// }

// const middle = midpoint(favMovies.length)

// // console.log(favMovies.slice(middle))

// favMovies.slice(middle)

// console.log(favMovies)  // no slicing did not permanently alter our array

// let slicedArray = favMovies.slice(middle)

// console.log(slicedArray)

// console.log(favMovies.indexOf('Fast and Furious'))

// console.log(favMovies.indexOf('A movie not in the array')) //Returns -1

// // 12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

// // const doesn't allow reassignment of the variable but since arrays are mutable the elements inside can still be changed.  We could have used let.  Should we have?  Well since we were not reassigning the variable const works fine in my opinion.  However since we are changing the contents there does seem to be a lot of different opinions about this on the web.  One way to stop this would be to use Object.freeze

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'),1)
// console.log(whereIsWaldo)

// Change "Neff" to "No One"

// whereIsWaldo[1][2] = 'No One'

// console.log(whereIsWaldo)

// Ok that's one way but let's find where Neff is inside the array for a greater challenge.

//...  I think it would involve a recursive function and right now since its 12:30 AM I'm going to move on - but this sounds like a fun challenge for later loop through an array of unknown nesting to go through every element in the array and all sub arrays and all sub sub arrays and so on... until we find 'Waldo' and then we have the indices. To me that would be truely finding Waldo

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for(let i = 1; i<=20; i++){
//   console.log("Love me, pet me! HSSSSSS!")
// }

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...","...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// function random_message(){
//   let x = Math.random()
//   if(x <= 1/3){
//     return "...human...why you taking pictures of me?..."
//   }
//   else if(x <= 2/3) {
//     return "...the catnip made me do it..."
//   }
//   else {
//     return "...why does the red dot always get away..."
//   }
// }

// // for(let i=1; i<=30; i++){
// //   console.log(random_message())
// // }

// for(let i = 1; i<=20; i++){
//   if(i%2 !=0){
//     console.log("Love me, pet me! HSSSSSS!")
//   }
//   else {
//     console.log(random_message())
//   }
// }

// Find the Median

// Find the median number in the following nums array, then console.log that number.

// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15

// nums.sort()

// console.log(nums)

// Ok the median would the value of the middle element in a sorted array.  In the case of an array with an even number of elements this would be the average of the 2 middle numbers.

function median(array){
  array.sort()
  console.log(array)
  if(array.length % 2 != 0){
    // the median is the middle element.  i.e for an array of 19 elements [0] thru [18] the middle element would be the 10th element which would correspond to [9] (Math.floor(19 / 2))
    return array[Math.floor(array.length/2)]
  }
  else {
    // the median is the average of the 2 middle elements.  i.e for an array of 18 elements [0] thru [17] the middle element would be the average of the 9th and 10th element ([8] and [9]) / 2.
    return array[(array[array.length / 2] + array[array.length / 2 - 1])/2]
  }
}

console.log(median(nums))