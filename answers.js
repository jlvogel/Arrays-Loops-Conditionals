console.log(`
//////////////////////////////////////////////
////////      Easy Going
//////////////////////////////////////////////`)


console.log(`
Write a for loop that will log the numbers 1 through 20.`)

for(let i =1; i<=20; i++){
  console.log(i)
}


console.log(`

//////////////////////////////////////////////
////////      Get Even
//////////////////////////////////////////////`)

console.log(`
Write a for loop that will log only the even numbers in 0 through 200`)

for(let i = 0; i <= 200; i=i+2){
  console.log(i)
}


console.log(`

//////////////////////////////////////////////
////////      Fizz Buzz
//////////////////////////////////////////////`)

console.log(`
1. Write a javascript application that logs all numbers from 1 - 100.
2. If a number is divisible by 3 log "Fizz" instead of the number.
3. If a number is divisible by 5 log "Buzz" instead of the number.
4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.`)

for(let i = 1; i <= 100; i++){
  if(i%3==0){console.log("Fizz")
    if(i%5==0){console.log("FizzBuzz")}
  }
  else if(i%5==0){console.log("Buzz")}
  else {console.log(i)}
}

console.log(`

//////////////////////////////////////////////
////////      Wild Wild Life
//////////////////////////////////////////////`)

// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

console.log(`
1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.`)

plantee[2]++
console.log(plantee)

console.log(`
2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".`)


wolfy[3] = "Gotham City"
console.log(wolfy)

console.log(`
3. Give D'Art a second hometown by adding "Hawkins"`)
dart[3] = [dart[3], "Hawkins"]
console.log(dart)

console.log(`
4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".`)

wolfy.shift()
wolfy.unshift("Gameboy")
console.log(wolfy)

console.log(`

//////////////////////////////////////////////
////////      Yell at the Ninja Turtles
//////////////////////////////////////////////`)

console.log(`
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)`)

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
console.log(turtles)

console.log(`
2. Use a for of loop (not a typo - try it out! Try a for of lop) to call toUpperCase() on each of them and print out the result.`)

for(let turtle of turtles){
  turtles[turtles.indexOf(turtle)] = turtle.toUpperCase()
}
console.log(turtles)

console.log(`

//////////////////////////////////////////////
////////      Methods, Revisited
//////////////////////////////////////////////`)

// Here is a list favMovies:
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(`
Console log: the index of Titanic`)
console.log(favMovies)

for(i in favMovies){
  if(favMovies[i] == 'Titanic'){
    //console.log(`The index of the Titanic is ${i}`)
    break
  }
}

// Ok that's one way that works
// Here's a better way:

console.log(`The index of the Titanic is ${favMovies.indexOf('Titanic')}`)


console.log(`
1. use the .sort method`)
favMovies.sort()   // sorted alphabetical
console.log(favMovies)  // permanently altered
console.log(`This sorted the array alphabetically and permanently altered the array`)

console.log(`
2. Use the method pop`)
favMovies.pop()
console.log(favMovies)
console.log(`The pop method removed the last element ('Volver') from the array`)

console.log(`
3. push "Guardians of the Galaxy"`)
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
console.log(`favMovies.push("Guardians of the Galaxy") added a new element to the end of array `)

console.log(`
4. Reverse the array`)
favMovies.reverse()
console.log(favMovies)

console.log(`
5. Use the shift method`)
favMovies.shift()
console.log(favMovies)
console.log(`favMovies.shift() removed the first element ('Guardians of the Galaxy') from the array`)

console.log(`
6. unshift - what does it return?`)
console.log(`console.log(favMovies).unshift('Back to the future')) returns: `)
console.log(favMovies.unshift('Back to the future'))
console.log(`This appears to return the length (number of elements) of the updated array:`)
console.log(favMovies)
console.log(`We can see that 'Back to the future' was added to the beginning of the array.`)

console.log(`
7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?`)

favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar')
console.log(favMovies)
console.log(`Yes, this permanently altered our array`)

console.log(`
8. slice the last half of the array(challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?`)

function midpoint(num){
  return Math.round(num/2)
}

const middle = midpoint(favMovies.length)

favMovies.slice(middle)
console.log(favMovies)
console.log(`No, slicing did not permanently alter our array.`)

console.log(`
9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?`)
let slicedArray = favMovies.slice(middle)
console.log(slicedArray)
console.log(`slicing an array returns a new array seperate from the array that was sliced`)

console.log(`
10. console.log your final results`)
console.log(favMovies)

console.log(`
11. After running the above tasks, console.log the index of "Fast and Furious" - If we removed it from the array, what value do we get when we look for the index of something that is not in the array`)
console.log(`
The index of 'Fast and Furious is ${favMovies.indexOf('Fast and Furious')}`)

console.log(`
console.log(favMovies.indexOf('A movie not in the array')) // returns: `)
console.log(favMovies.indexOf('A movie not in the array')) //returns -1

console.log(`
12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?`)

console.log(`
const doesn't allow reassignment of the variable but since arrays are mutable the elements inside can still be changed.  We could have used let.  Should we have?  Well since we were not reassigning the variable const works fine in my opinion.  However since we are changing the contents there does seem to be a lot of different opinions about this on the web.  One way to stop this would be to use Object.freeze`)

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

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// // Expected output:
// // => 15

// // nums.sort()

// // console.log(nums)

// // Ok the median would the value of the middle element in a sorted array.  In the case of an array with an even number of elements this would be the average of the 2 middle numbers.

// function median(array){
//   array.sort()
//   console.log(array)
//   if(array.length % 2 != 0){
//     // the median is the middle element.  i.e for an array of 19 elements [0] thru [18] the middle element would be the 10th element which would correspond to [9] (Math.floor(19 / 2))
//     return array[Math.floor(array.length/2)]
//   }
//   else {
//     // the median is the average of the 2 middle elements.  i.e for an array of 18 elements [0] thru [17] the middle element would be the average of the 9th and 10th element ([8] and [9]) / 2.
//     return array[(array[array.length / 2] + array[array.length / 2 - 1])/2]
//   }
// }

// console.log(median(nums))

// Hungry for More?

// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// const kristynsClosetCopy = JSON.parse(JSON.stringify(kristynsCloset))

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// const thomsClosetCopy = JSON.parse(JSON.stringify(thomsCloset))

// // Alien Attire
// // Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

// kristynsShoe = kristynsCloset.shift()

// thomsCloset[2].push(kristynsShoe)

// // console.log(thomsCloset)

// // Dress Us Up
// // Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// // for Kristyn:
// // pseudocode
// // since Kristyn lost her left shoe to thom she now has 6 items in her closet.  we can choose 3 seperate outfits for Kristyn consisting of 2 items each.  We can do this by randomly sorting the array and popping the last 2 on the array 3 times for the outfits.

// let points = kristynsCloset

// for (let i = points.length -1; i > 0; i--) {
//   let j = Math.floor(Math.random() * i)
//   let k = points[i]
//   points[i] = points[j]
//   points[j] = k
// }

// // console.log(points)

// let kristynsOutfit = []
// let l = points.length
// let n = 0
// for(let i=0; i< l; i+=2){
//   // console.log(n, kristynsCloset)
//   kristynsOutfit[n] = [points.pop(), points.pop()]
//   n++
// }

// console.log('kristyn\'s 3 outfits are: ',kristynsOutfit)

// // Ok Thoms outfits are calculated a little differently:

// // we will first shuffle his 3 different categories.  Then we will pop like before.

// for (let item of thomsCloset) {
//   let points = item
//   for (i = points.length -1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i)
//     let k = points[i]
//     points[i] = points[j]
//     points[j] = k
//   }
// }

// // console.log(thomsCloset)

// let thomsOutfit = []

// for (let i in thomsCloset){
//   thomsOutfit[i] = []
//   for (let item in thomsCloset) {
    
//       // console.log(i, item)
//       // console.log(thomsCloset[item].pop())
//       thomsOutfit[i].push(thomsCloset[item].pop())
    
//   }
//   // console.log(thomsOutfit)
// }
// console.log('thom\'s 3 outfits are: ',thomsOutfit)

// // Dirty Laundry

// // Continue looking at the closet arrays:

// // 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array

// for(item of kristynsCloset) {
//   console.log(`WHIRR: Now washing ${item}`)
// }

// // we not that the above for loop does not work.
// // why?  Because we completely popped Kristyn's
// // closet - now there's nothing in it

// // what we need to do is make a clean copy of
// // kristynsCloset array back in our code then 
// // loop thru that.

// // setting another variable to equal kristynsCloset does not work because it assigns by reference not by value.


// // Credit to https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/     article by Yazeed Bzadough - scroll down to point 8. JSON.parse(JSON.stringify(nestedNumbers) for the following:

// // JSON.parse turns a string into an object.

// // Combining them can turn an object into a string, and then reverse the process to create a brand new data structure.

// // Note: This one safely copies deeply nested objects/arrays!

// // nestedNumbers = [[1], [2]];
// // numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

// // numbersCopy[0].push(300);
// // console.log(nestedNumbers, numbersCopy);

// // [[1], [2]]
// // [[1, 300], [2]]
// // These two arrays are completely separate!

// for(item of kristynsClosetCopy) {
//   console.log(`WHIRR: Now washing ${item}`)
// }

// // Inventory

// // 2. Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.

// // console.log(thomsCloset)

// // need to make a clean copy of Thom's closet also.  going back in code.

// console.log(thomsClosetCopy)

// n = 0
// for(item of thomsClosetCopy) {
//   n++
//   if(n==1){console.log(`Thom's shirts: `)}
//   else if (n==2){console.log(`Thom's pants: `)}
//   else {console.log(`Thom's accessories: `)}
//   console.log(item)
// }